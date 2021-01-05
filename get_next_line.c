/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: delvin <delvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/15 20:40:51 by delvin            #+#    #+#             */
/*   Updated: 2021/01/05 19:05:14 by delvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "get_next_line.h"

char *ft_strcpy(char *dest, char *src)
{
	int i;

	i = 0;
	while (src[i] != '\0')
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = '\0';
	return (dest);
}

void	ft_strclr(char *s)
{
	if (s)
	{
		while (*s)
		{
			*s = '\0';
			s++;
		}
	}
}

char	*check_remainder(char *remainder, char **line)
{
	char *putzero;

	putzero = NULL;
	if (remainder)
		if ((putzero = ft_strchr(remainder, '\n')))
		{
			*putzero = '\0';
			*line = ft_strdup(remainder);
			ft_strcpy(remainder, ++putzero);
		}
		else
		{
		*line = ft_strdup(remainder);
		ft_strclr(remainder);
		}
	else
		*line = ft_strnew(1);
	return (putzero);
}

int	get_next_line(int fd, char **line)
{
	char		buf[BUFFER_SIZE + 1];
	int			alr_read;
	char		*putzero;
	static char	*remainder;
	char		*reall;

	putzero = check_remainder(remainder, line);
	while (!putzero && (alr_read = read(fd, buf, BUFFER_SIZE)))
	{
		buf[alr_read] = '\0';
		if ((putzero = ft_strchr(buf, '\n')))
		{
			*putzero = '\0';
			putzero++;
			remainder = ft_strdup(putzero);
		}
		reall = *line;
		*line = ft_strjoin(*line, buf);
		free(reall);
	}
	return (alr_read || ft_strlen(remainder) || ft_strlen(*line)) ? 1 : 0;
}

int main(void)
{
	char *line;
	int fd;

	fd = open("file.txt", O_RDONLY);
	get_next_line(fd, &line);
	printf("%s\n", line);
	
	get_next_line(fd, &line);
	printf("%s\n", line);

	get_next_line(fd, &line);
	printf("%s\n", line);
	
	get_next_line(fd, &line);
	printf("%s\n", line);

		get_next_line(fd, &line);
	printf("%s\n", line);
	
	get_next_line(fd, &line);
	printf("%s\n", line);

		get_next_line(fd, &line);
	printf("%s\n", line);
	
	get_next_line(fd, &line);
	printf("%s\n", line);
}