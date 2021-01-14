/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: delvin <delvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/15 20:40:51 by delvin            #+#    #+#             */
/*   Updated: 2021/01/14 18:21:59 by delvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "get_next_line.h"

static	int		join_n_free(char **str, char **line)
{
	char	*reall;

	reall = *line;
	*line = ft_strjoin(*line, *str);
	free(reall);
	if (!*line)
	{
		free(*str);
		return (0);
	}
	return (1);
}

static	int		remind_checker(char **check_rem, char **line)
{
	char	*reall;
	char	*p_n;

	if (!*check_rem)
		return (0);
	if ((p_n = ft_strchr(*check_rem, '\n')))
	{
		*p_n = '\0';
		if (!join_n_free(check_rem, line))
			return (-1);
		reall = *check_rem;
		*check_rem = ft_strdup(++p_n);
		free(reall);
		return (1);
	}
	else
	{
		if (!join_n_free(check_rem, line))
			return (-1);
		free(*check_rem);
		*check_rem = NULL;
	}
	return (0);
}

static	int		get_line(int *fd, char **line, char **check_rem, char **buf)
{
	int		res;
	char	*putzero;
	int		isexit;

	isexit = 1;
	while (isexit && (res = read(fd, *buf, BUFFER_SIZE)) > 0)
	{
		(*buf)[res] = '\0';
		if ((putzero = ft_strchr(*buf, '\n')))
		{
			*putzero = '\0';
			if (!(*check_rem = ft_strdup(++putzero)))
			{
				free(*buf);
				return (-1);
			}
			isexit = 0;
		}
		if (!join_n_free(buf, line))
			return (-1);
	}
	free(*buf);
	if (!isexit && res > 0)
		return (1);
	return (res == -1 ? -1 : 0);
}

int				get_next_line(int fd, char **line)
{
	static	char	*check_rem;
	int				res;
	char			*buf;

	if (fd < 0 || BUFFER_SIZE < 1 || !line)
		return (-1);
	if (!(*line = ft_strdup("")))
		return (-1);
	if ((res = remind_checker(&check_rem, line)) > 0)
		return (1);
	else if (res == -1)
		return (-1);
	if (!(buf = (char*)malloc(sizeof(char) * (BUFFER_SIZE + 1))))
		return (-1);
	if ((res = get_line(fd, line, &check_rem, &buf)) < 0)
		return (-1);
	return (res);
}
