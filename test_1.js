// v 2.0 05.10.2022
setTimeout(() => {
    var web_link_web = web_link;
    if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
    
    var android_af_dp = encodeURIComponent(android_dp);
    var ios_af_dp = encodeURIComponent(ios_dp);
    var web_url = '';
    need_web == true ? web_url = web_link : need_web;
    var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '';
    var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) { return match[2] } else { return '' };
    };
    var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
    var utm_arr = [];
    if (document.location.href.search(/=/) > 0) {
    var UTM = decodeURIComponent(document.location.href.split('?').pop());
    var utm_arr = UTM.split('&');
        var count_utm_arr = -1;
        
    for (i = 0; i < utm_arr.length; i++) { if (utm_arr[i].search('utm_') >= 0) { var count_utm_arr = ++i } }
    (count_utm_arr >= 0) ? utm_arr = utm_arr.slice(0, count_utm_arr) : count_utm_arr = 0;
    for (i = 0; i < utm_arr.length; i++) {
    if (utm_arr[i].toLowerCase().search('utm_source') >= 0) { var utm_source_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_medium') >= 0) { var utm_medium_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_campaign') >= 0) { var utm_campaign_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_content') >= 0) { var utm_content_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_term') >= 0) { var utm_term_sm = '-_-' + (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('need_web') >= 0) { utm_arr[i] = '' };
    if (utm_arr[i].length > 200) { utm_arr[i] = utm_arr[i].slice(0, 200) }
    }
    }
    if (utm_source_sm == '') { utm_source_sm = utm_cookie_arr[0].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_medium_sm == '') { utm_medium_sm = utm_cookie_arr[1].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_campaign_sm == '') { utm_campaign_sm = utm_cookie_arr[2].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_content_sm == '') { utm_content_sm = utm_cookie_arr[3].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_term_sm == '') { utm_term_sm = '-_-'+utm_cookie_arr[4].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    var other_param = encodeURIComponent(utm_arr.filter(v => v ).join('&'));
    function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
    }
    if (other_param != '') {
    var other_param_app = other_param + '%26';
        var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') 
    };
    var ga_uid_fc = getCookie('_ga') || '0.0.0.0';
    var ga_uid_arr = ga_uid_fc.split(/\./);
    var ga_uid_sm = ("_y_" + getCookie('_ym_uid') + "_d_" + getCookie('___dmpkit___') + "_g_" + ga_uid_arr[2] + '.' + ga_uid_arr[3]).slice(0, 90);
    var utm_content_plus = utm_content_sm.slice(0, 100) + utm_term_sm.slice(0, 100);
    var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
    external_source = external_source.length > 165 ? external_source.slice(0,165)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
    if (android_af_dp.search(/\?|%3F/) > 0){
    var is_q_and = '%26';
    } else
    { var is_q_and = '%3F'};
    if (ios_af_dp.search(/\?|%3F/) > 0){
    var is_q_ios = '%26';
    } else
    { var is_q_ios = '%3F' };
    
    var web_utm_source = utm_source_sm ? 'utm_source='+utm_source_sm : '';
    var web_utm_medium = utm_medium_sm ? '&utm_medium='+utm_medium_sm : '';
    var web_utm_campaign = utm_campaign_sm ? '&utm_campaign='+utm_campaign_sm : '';
    var web_utm_content = utm_content_sm ? '&utm_content='+utm_content_sm : '';
    var web_utm_term = utm_content_sm ? '&utm_term='+utm_term_sm : '';
    var web_link_other_param_web = web_link+other_param_web
    if (web_link_other_param_web.toLowerCase().search(/\?/)>0)
    { var separator_web = '&';}
    if (web_link_other_param_web.toLowerCase().search(/\?/)<0)
    { var separator_web = '?';}
    if ((web_link.toLowerCase().search('sberbank.ru')<0) || (web_link.toLowerCase().search('sberbank.com')<0)){
    var utm_all=separator_web+web_utm_source+web_utm_medium+web_utm_campaign+web_utm_content+web_utm_term;}
    else {var utm_all = '';}
    if (!af_media_source.includes('greetingpacks')){
    if (web_link.search("person/dist_services/inner_apps")>=0) { var web_link_web = 'https://online.sberbank.ru/CSAFront/index.do'}
    }
    function check_platform(ua) { if (/android/gi.test(ua)) { return 'android'; } if (/iphone|ipod/gi.test(ua)) { return 'iPhone'; } return 'unknown'; }
    var platform = check_platform(navigator.userAgent);
    function redirect(href){return window.location.href=href}
    if (platform == "android") {

        var store_inner = "https://redirect.appmetrica.yandex.com/serve/460272123932346441" + '?external_source=' + external_source  + '&sl=' + af_media_source;
        var store_samsung = "https://redirect.appmetrica.yandex.com/serve/27926366448060152" + '?external_source=' + external_source + '&sl=' + af_media_source;
        var store_xiaomi = "https://redirect.appmetrica.yandex.com/serve/244099130190824457" + '?external_source=' + external_source + '&sl=' + af_media_source;
        var store_huawei = "https://redirect.appmetrica.yandex.com/serve/604387117476382422" + '?external_source=' + external_source + '&sl=' + af_media_source;

        var dp_and = decodeURIComponent(android_af_dp + is_q_and + other_param_app + external_source).replace(new RegExp("^android-app:\/\/", "gm"), "intent://");
        function check_brand(ua) { if (/SAMSUNG|SM-\w*|SCH-I545/g.test(ua)) { return 'samsung'; } if (/NTH-NX9|NTN-LX1|ELZ-AN00|ELZ-AN20|TFY-LX\d|CMA-LX2|ANY-NX1/g.test(ua)) { return 'other'; } if (/[A-Z]{3}-\w*/g.test(ua)) { return 'huawei'; } if (/\sM2|Redmi|POCO\w*|\sMi|\sMI|RMX/g.test(ua)) { return 'xiaomi'; } return 'other' }
    function getBrowser() {const userAgent = navigator.userAgent; var browser = 'unkown'; browser = /ucbrowser/i.test(userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent) ? 'Chrome' : browser; browser = /safari/i.test(userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(userAgent) ? 'Opera' : browser; browser = /ya/i.test(userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser/i.test(userAgent) ? 'Miui' : browser; browser = /yasearchbrowser/i.test(userAgent) ? 'YaStart' : browser; return browser};
        var browser = getBrowser();
        var brand=check_brand(navigator.userAgent);
            function and_go_app_nw_false() { dataLayer.push('smartlinks', af_media_source, 'go_to_app_false'); return redirect(dp_and)};
            function and_go_app_nw_true() { dataLayer.push('smartlinks', af_media_source, 'go_to_app_true'); return redirect(dp_and)};
            function and_go_web() { dataLayer.push('smartlinks', af_media_source, 'go_to_web'); return redirect(web_link_web + other_param_web + utm_all)};
            function and_go_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_web_error'); return redirect(web_link_web + other_param_web + utm_all)};
            function and_go_inner() { dataLayer.push('smartlinks', af_media_source, 'go_to_inner'); return redirect(store_inner)};
            function and_go_inner_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_inner_error'); return redirect(store_inner)};
            function and_go_samsung() { dataLayer.push('smartlinks', af_media_source, 'go_to_samsung'); return redirect(store_samsung)};
            function and_go_samsung_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_samsung_error'); return redirect(store_samsung)};
            function and_go_xiaomi() { dataLayer.push('smartlinks', af_media_source, 'go_to_xiaomi'); return redirect(store_xiaomi)};
            function and_go_xiaomi_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_xiaomi_error'); return redirect(store_xiaomi)};
            function and_go_huawei() { dataLayer.push('smartlinks', af_media_source, 'go_to_huawei'); return redirect(store_huawei)};
            function and_go_huawei_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_huawei_error'); return redirect(store_huawei)};
            function and_go_to_intent_store() { dataLayer.push('smartlinks', af_media_source, 'go_to_intent_store'); return redirect(dp_and + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + store_inner + ";end")};
            function and_go_to_intent_store_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_intent_store_error'); return redirect(store_inner)};
            function and_go_to_intent_web() { dataLayer.push('smartlinks', af_media_source, 'go_to_intent_web'); return redirect(dp_and + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + web_link_web + other_param_web + utm_all + ";end")};
            function and_go_to_intent_web_error() { dataLayer.push('smartlinks', af_media_source, 'go_to_intent_web_error'); return redirect(web_link_web + other_param_web + utm_all)};

        if ((need_web == false) || (web_link.search("person/dist_services/inner_apps")>=0)) { // or android inner_apps
            var redirect_android_chr_ym=function(){setTimeout(function(){and_go_app_nw_false()},100);setTimeout(function(){and_go_inner()},400);setTimeout(function(){and_go_inner_error()},1500);}
            var redirect_android_samsung=function(){setTimeout(function(){and_go_app_nw_false()},100);setTimeout(function(){and_go_samsung()},400);setTimeout(function(){and_go_samsung_error()},1500);}
            var redirect_android_xiaomi=function(){setTimeout(function(){and_go_app_nw_false()},100);setTimeout(function(){and_go_xiaomi()},400);setTimeout(function(){and_go_xiaomi_error()},1500);}
            var redirect_android_huawei=function(){setTimeout(function(){and_go_app_nw_false()},100);setTimeout(function(){and_go_huawei()},400);setTimeout(function(){and_go_huawei_error()},1500);}
            var redirect_android_other=function(){setTimeout(function(){and_go_app_nw_false()},100);setTimeout(function(){and_go_inner()},400);setTimeout(function(){and_go_inner_error()},1500);}
            var redirect_android_opera=function(){setTimeout(function(){and_go_to_intent_store()},100);setTimeout(function(){and_go_to_intent_store_error()},1500);}
            if (browser == 'Chrome' || browser == 'YaBrowser') {
                if (brand == "samsung") { dataLayer.push('smartlinks', af_media_source, 'redirect_samsung_dp_store'); redirect_android_samsung();
         } else if (brand == "huawei")  { dataLayer.push('smartlinks', af_media_source, 'redirect_huawei_dp_store'); redirect_android_huawei();
         } else if (brand == "xiaomi")  { dataLayer.push('smartlinks', af_media_source, 'redirect_xiaomi_dp_store'); redirect_android_xiaomi();
                                 } else { dataLayer.push('smartlinks', af_media_source, 'redirect_chrome_dp_store'); redirect_android_chr_ym();}
     } else if (browser == 'Opera' || browser == 'YaStart') { dataLayer.push('smartlinks', af_media_source, 'redirect_opera_dp_store'); redirect_android_opera();
                                                     } else { dataLayer.push('smartlinks', af_media_source, 'redirect_other_dp_store'); redirect_android_other();}
        } else {
            var redirect_android_chr_ym=function(){setTimeout(function(){and_go_app_nw_true()},100);setTimeout(function(){and_go_web()},400);setTimeout(function(){and_go_error()},1500);}
            var redirect_android_samsung=function(){setTimeout(function(){and_go_app_nw_true()},100);setTimeout(function(){and_go_web()},400);setTimeout(function(){and_go_error()},1500);}
            var redirect_android_xiaomi=function(){setTimeout(function(){and_go_app_nw_true()},100);setTimeout(function(){and_go_web()},400);setTimeout(function(){and_go_error()},1500);}
            var redirect_android_huawei=function(){setTimeout(function(){and_go_app_nw_true()},100);setTimeout(function(){and_go_web()},400);setTimeout(function(){and_go_error()},1500);}
            var redirect_android_other=function(){setTimeout(function(){and_go_app_nw_true()},100);setTimeout(function(){and_go_web()},400);setTimeout(function(){and_go_error()},1500);}
            var redirect_android_opera=function(){setTimeout(function(){and_go_to_intent_web()},100);setTimeout(function(){and_go_to_intent_web_error()},1500);}
            if (browser == 'Chrome' || browser == 'YaBrowser') {
                       if (brand == "samsung") { dataLayer.push('smartlinks', af_media_source, 'redirect_samsung_dp_web'); redirect_android_samsung();
                } else if (brand == "huawei")  { dataLayer.push('smartlinks', af_media_source, 'redirect_huawei_dp_web'); redirect_android_huawei();
                } else if (brand == "xiaomi")  { dataLayer.push('smartlinks', af_media_source, 'redirect_xiaomi_dp_web'); redirect_android_xiaomi();
                                        } else { dataLayer.push('smartlinks', af_media_source, 'redirect_chrome_dp_web'); redirect_android_chr_ym();}
            } else if (browser == 'Opera' || browser == 'YaStart') { dataLayer.push('smartlinks', af_media_source, 'redirect_opera_dp_web'); redirect_android_opera();
                                                            } else { dataLayer.push('smartlinks', af_media_source, 'redirect_other_dp_web'); redirect_android_other();}
        }
    } else if (platform == "iPhone") {
        setTimeout(function () {
            window.location.href = decodeURIComponent(ios_af_dp + is_q_ios + other_param_app + external_source).replace(new RegExp("^sberbankonline:\/\/", "gm"), "sbolonline://")
        }, 100);
        setTimeout(function () {
            window.location.href = "https://www.sberbank.com/sms/sl_ios_dp_old?URL_START=" + encodeURIComponent(document.location.href) + "&SL_iOS_DP_OLD=" + ios_af_dp + is_q_ios + other_param_app + external_source + "&SL_WEB_LINK_iOS=" + web_link_web + other_param_web + utm_all;
        }, 300);
        setTimeout(function () {
            window.location.href = web_link_web + other_param_web + utm_all;
        }, 800);
    } else {
        setTimeout(function () {
            window.location.href = web_link_web + other_param_web + utm_all;
        }, 100);
    }
}, 1800)
