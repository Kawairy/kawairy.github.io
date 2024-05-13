 // v 3.6 16.02.2024

 var t0 = performance.now().toFixed(), dataLayer = [], dataLayerSL = [], dlhref = decodeURIComponent(document.location.href).replaceAll('#','?'), type, ncdl, ncet, cid, utm_cookie_arr, userData = 'none'; 
 
 var date = new Date; date.setDate(date.getDate() + 30)

 var cookie_path = ';domain=.' + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + '; path=/; expires=' + date.toUTCString(),dnow = Date.now().toString(), custom_uid = dnow + Math.floor(Math.random() * (600000000 - 100000000 + 1) + 100000000).toString(); // need update -- need check for restrictions on domain level 

 dlhref.search('sl_debug=1') >= 0 ? debug = true : debug = false; var n = 0;
 
 function handleResponse(r) {window.location.href = r;}
 function randomNumber(min, max) {return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);}
 function createCookie(name, value) {document.cookie = name + '=' + value + cookie_path}
 function getCookie(name) { var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' }; };
 function getBrowser() { var browser = 'unknown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /samsungbrowser/i.test(navigator.userAgent) ? 'SamsungBrowser' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|opt|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera|OPT/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /yabrowser/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser\/(13|14|15|16|17|18|19|20)/i.test(navigator.userAgent) ? 'Miui 13+' : browser; browser = /miuibrowser\/(9|10|11|12)/i.test(navigator.userAgent) ? 'Miui 12-' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser };
 function check_platform() { if (/android/gi.test(navigator.userAgent)) { return 'android'; } else if (/iphone|ipod/gi.test(navigator.userAgent)) { return 'iPhone'; } else {return 'unknown'; }};

 var platform = check_platform(), browser = getBrowser();
  //deeplink scheme filter
  const sl_protocols = ['http://', 'https://', 'android-app://ru.sberbankmobile','sbbol://','sberinvestor://','sberbankonline://','sbermobilechat://','investsphere://','investorplus://','newinvestor://','investorx.prod://','ru.sberbank.sberinvestor://','sbbol://','ios-app-smartonline://','btripsexpenses://','sbolonline://','sberbankonline://','sbermobilechat://','sberbankidlogin://','sbolidlogin://','btripsexpenses://sbolidlogin/']
  function check_protocol(link, allowed_protocols) {
     if (Array.isArray(link)) {
         for (var url of link) {
             if (!allowed_protocols.some(protocol => url.startsWith(protocol))) {
                 return false; 
             }
         }
         return true; 
     } else {
         return allowed_protocols.some(protocol => link.startsWith(protocol));
     }
 }
 function get_final_app(dp) {
 var app_data = [];
 if (pfa == true) {
 var uca0 = utm_cookie_arr[0].replace(/[^a-zA-Z0-9_=-]/g, ''), uca1 = utm_cookie_arr[1].replace(/[^a-zA-Z0-9_=-]/g, ''), uca2 = utm_cookie_arr[2].replace(/[^a-zA-Z0-9_=-]/g, ''), uca3 = utm_cookie_arr[3].replace(/[^a-zA-Z0-9_=-]/g, ''), uca4 = utm_cookie_arr[4].replace(/[^a-zA-Z0-9_=-]/g, '')
 if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca4.length > 19) {uca4 = uca4.slice(0, 19);}}
 if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca3.length > 19) {uca3 = uca3.slice(0, 19);}}
 if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca0.length > 24) {uca0 = uca0.slice(0, 24);}}
 if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca1.length > 14) {uca1 = uca1.slice(0, 14);}}
 if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {uca2 = uca2.slice(0, 153 - ((sl_name+uca0+uca1+uca2+uca3+uca4).length-uca2.length))}
 app_data = [pfa_name+sl_name,uca0, uca1, uca2, uca3, uca4].join('-_-') + '_y_'+cid[0]+'_d_'+cid[2]+'_s_'+cid[1];
 }
 if (dlhref.search(/\?/) > 0) {
 var href_params = dlhref.split('?')[1].split('&');
 var params_other = href_params.filter(v => v.toLowerCase().search('^utm_|need_web|external_source|sl_debug') == -1);

 if (custom_params == true) {
    if(platform == 'android'){
    var params_other = params_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_AND[0] + '=' + v.split('=')[1] : v)
    }
    if(platform == 'iPhone'){
    var params_other = params_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_IOS[0] + '=' + v.split('=')[1] : v)
    }
}
 app_data = params_other.concat(app_data).join('&')
} 

 if (dp.search(/\?/) > 0) {
 app_data.length > 1 ? app_final = dp + '&' + app_data : app_final = dp; 
 } else {
 app_data.length > 1 ? app_final = dp + '?' + app_data : app_final = dp; 
 }
 if(check_protocol(app_final,sl_protocols)){
 return app_final;
 } else {
    return encodeURIComponent('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
 }
 }
 function get_final_web(dp) {
    var anchor = (dp.search('#') > 0) ? '#' + dp.split('#')[1] : '';
    var dp = dp.replace(new RegExp("\\?#/", "gm"), "?/").replace(new RegExp("/index.do#", "gm"), "index.do").split('#')[0].replace(new RegExp("&$|\\?$", "gm"), "");
    var location_params = [], location_utm = [], location_other = [], weblink_params = [], weblink_utm = [];
    if (dlhref.search(/\?/) > 0) {
    var location_params = dlhref.split('?')[1].split('&');
    // var location_utm = location_params.map(v => v.search('^utm_') !== -1 ? v : '').filter(v => v);
    var location_utm = utm_params_arr;
    var location_other = location_params.map(v => v.search('^utm_|need_web|external_source|sl_debug') == -1 ? v : '').filter(v => v);
    if (custom_params == true) {
        var location_other = location_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_WEB[0] + '=' + v.split('=')[1] : v)
    }
    }
    if (dp.search(/\?/) > 0) {
    var weblink_params = dp.split('?')[1].split(new RegExp('\\?|&'));
    var weblink_utm = weblink_params.map(v => v.search('^utm_') !== -1 ? v : '').filter(v => v);
    }
    if((dp.search('online.sberbank.ru') > 0) && (dp.search('srvUrl=') > 0)) {
    if (dp.search('srvParams=') > 0) {
    var srv_params2 = dp.split('srvUrl=')[1].split(new RegExp('\\?|&'))
    var sbol_other_params = dp.split('srvUrl=')[0].split(new RegExp('\\?|&')).splice(1)
    var srv_other = srv_params2.map(v => v.search('^utm_|need_web|external_source|sl_debug') == -1 ? v : '').filter(v => v);
    var srv_p = srv_other.concat(location_other);
    if (sbol_other_params == 0){
    var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + srv_p[0] + '&' + srv_p.splice(1).join('&') : 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + srv_p.join('');
    } else {
    var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + srv_p[0] + '?' + srv_p.splice(1).join('&') : 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + srv_p.join('');
    }
    } else {
    var srv_params2 = decodeURIComponent(dp).split('srvUrl=')[1].split(new RegExp('\\?|&'))
    var sbol_other_params = decodeURIComponent(dp).split('srvUrl=')[0].split(new RegExp('\\?|&')).splice(1)
    var srv_other = srv_params2.map(v => v.search('^utm_|need_web|external_source|sl_debug') == -1 ? v : '').filter(v => v);
    var srv_p = srv_other.concat(location_other,'cid=' + cid[0]);
    if (sbol_other_params == 0){
    var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + encodeURIComponent(srv_p[0] + '?' + srv_p.splice(1).join('&')) : 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + encodeURIComponent(srv_p.join(''));
    } else {
    var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + encodeURIComponent(srv_p[0] + '?' + srv_p.splice(1).join('&')) : 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + encodeURIComponent(srv_p.join(''));
    }}
    
    if (weblink_utm.length > 0) {
    var web_final = (srv.search(/\?/) > 0) ? srv + '&' + weblink_utm.join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];
    } else if (location_utm.length > 0) {
    var web_final = (srv.search(/\?/) > 0) ? srv + '&' + (location_utm.map((v) => v).filter(v => v)).join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];
    } else if(utm_cookie_arr.length > 0){
    var web_final = (srv.search(/\?/) > 0) ? srv + '&' + (utm_cookie_arr.map((v,i) => (v !== '') ? v = utm_name[i] + v : v).filter(v => v)).join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];
    } else {
    var web_final = srv + '&cid='+cid[0];
    }
    } else {
    if (weblink_utm.length > 0) {
    if (location_other.length > 0){
    var web_final = (dp.search(/\?/) > 0) ? dp + '&' + location_other.join('&') + '&cid='+cid[0] : dp + '?' + location_other.join('&') + '&cid='+cid[0] + anchor;
    } else {
    var web_final = dp + '&cid='+cid[0] + anchor;
    }
    } else if (location_utm.length > 0) {
    var web_temp = location_other.concat(location_utm.map((v) => v).filter(v => v)).join('&');
    var web_final = (dp.search(/\?/) > 0) ? dp + '&' + web_temp + '&cid='+cid[0] + anchor : web_temp != '' ? dp + '?' + web_temp + '&cid='+cid[0] + anchor : dp + '?cid='+cid[0] + anchor;
    }else{
    var web_temp = location_other.concat(utm_cookie_arr.map((v,i) => (v !== '') ? v = utm_name[i] + v : v ).filter(v => v)).join('&');
    var web_final = (dp.search(/\?/) > 0) ? dp + '&' + web_temp + '&cid='+cid[0] + anchor : web_temp != '' ? dp + '?' + web_temp + '&cid='+cid[0] + anchor : dp + '?cid='+cid[0] + anchor;
    }
    }
    if(check_protocol(web_final,sl_protocols)){
        return web_final;
        } else {
           return encodeURIComponent('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }
    }


 
 if (dlhref.search('/sms/') != -1){
 var sl_name = dlhref.split('/sms/')[1].split(new RegExp('\\?|\&|\#|\%'))[0].replace(new RegExp("\\/|\\.","g"), "_");
 } else if (typeof(af_media_source) != 'undefined'){
 var sl_name = af_media_source;
 } else {
 var sl_name = document.location.pathname.split(new RegExp('\\?|\&|\#|\%'))[0].replace(new RegExp("\\/|\\.","g"), "_");
 }
 
 // Analytics
 
 (function (m, e, t, r, i, k, a) {m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
 m[i].l = 1 * new Date();for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
 k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
 })(window, document, "script", "/common/img/uploaded/files/sms/smartlink_code/wacc_test.js", "ym");

 
 // Debug
 
 if (debug){
 let debug_routing = setInterval(() => {
     drf(n)
     n++
 }, 3000);
     debug_routing
 function drf (n){
 if (n==1) {platform='iPhone';browser='Safari';routing();}
 if (n==2) {platform='android';browser='Chrome';routing();}
 if (n==3) {browser='Miui 13+';routing();}
 if (n==4) {browser='Opera';routing();}
 if (n==5) {browser='Firefox';routing();}
 if (n==6) {browser='Yandex';routing();}
 if (n==7) {console.log('done');clearInterval(debug_routing);}
 }
 }

 dataLayerSL.push = function (a, l, r) {
    if (!debug && a==''){
       window.location.href=r;
   
        } else { 
            if (l=='') {l=r};
            if (a.search(/info_and|final_and/)==0){ 
            a=a+'__'+need_web_and+'__'+option+'__'+type; // need update -- issue on r2
            l=l+'-__-'+userData+'-__-'+ncdl+'-__-'+ncet;} // need update -- issue on r2
    var t1 = performance.now().toFixed();
    l = l+'-__-pf1_'+t0+'-__-pf2_'+(t1-t0);
    var yaParams = {};
    yaParams['sessions_params'] = {};
    yaParams['sessions_params']['sv'] = cid[1];
    yaParams['sessions_params']['top100_id'] = cid[3];
    yaParams['sessions_params']['___dmpkit___'] = cid[2];
    yaParams['sessions_params']['_ym_uid'] = cid[0];
    yaParams['SMARTLINK_'+sl_name] = {};
    yaParams['SMARTLINK_'+sl_name][a] = {};
    yaParams['SMARTLINK_'+sl_name][a][l] = {};
    var jsond = {'uids': [[10008, 10031, cid[2]], [10008, 10037, cid[3]], [10008, 10041, cid[1]], [10008, 10060, cid[0]]], 
    'eventAttrs': [[301, 'SMARTLINK_'+sl_name], [302, a], [303, l],[10006, navigator.userAgent],[10059, utm_cookie_arr[0]], [10060, utm_cookie_arr[1]], [10061, utm_cookie_arr[2]], [10062, utm_cookie_arr[3]], [10063, utm_cookie_arr[4]],[10067, 'Smartlink_'], [10070, document.referrer], [10071, document.location.href]]}
    ym(89867636, 'params', yaParams);
    ym(31643078, 'params', yaParams);
    
    
    // ym(89867636, "hit", '/my/custom/path?utm_source=custom_source&utm_medium=custom_medium', {
    //     title: 'My Custom Title',
    //     referer: 'http://custom.referer.url',
    //     params: yaParams // Additional custom parameters
    // });


    // var yaParams = {};
    // ym(31643078, "hit", '/my/custom/path?utm_source=custom_source&utm_medium=custom_medium', {
    //     title: 'My Custom Title',
    //     referer: 'http://custom.referer.url',
    //     params: yaParams // Additional custom parameters
    // });


    var rdm = new XMLHttpRequest();
    rdm.open('POST', document.location.protocol+'//dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
   if (!debug && r!='') {rdm.addEventListener('loadend', function () {handleResponse(r);});}
   rdm.send(JSON.stringify(jsond));

   if (debug){
        if (platform=='unknown') {platform='WEB'};
        console.log('\n',  platform +' : '+ browser + ' : ' + a,'\n', 
       decodeURIComponent(
            r.replaceAll(':', ' ').replaceAll('%3A',' ') //need update -- 
           )
          ,'\n',
          r
          ,'\n'
        );
    }
    }
   }
   
   ym(89867636, "init", {});
   ym(31643078, "init", {triggerEvent: true});
 
 // ROUND ONE

 if (document.location.search.search('round__two_') != 1) { 
 
 if (typeof(web_link_and_option) == 'undefined') {var web_link_and_option = ''}; //need update -- for easy ab testing
 if (web_link_and_option != ''){
 if (getCookie('_sl_options') == '') {
 var option = randomNumber(1, 3);
 createCookie('_sl_options', option)} else { var option = getCookie('_sl_options')}
 } else { var option = 'none'}

// is utm in form?
if (typeof(tp_utm_arr) != 'undefined' && tp_utm_arr[0]!=''){var utm_params_arr = tp_utm_arr
} else {
// is utm in web_link_desk?
if (typeof(web_link_desk) != 'undefined' && web_link_desk.search('utm_source=')>0){
 var url_params = (web_link_desk.split('?').length > 1 ? web_link_desk.split('?')[1].split('&') : '') || [] // need update -- is not utm_params_arr
 } else {
 // is utm in href?
 var url_params = (dlhref.split('?').length > 1 ? dlhref.split('?')[1].split('&') : '') || []};
 var utm_params_arr = url_params.filter(v => v.toLowerCase().search('utm_') !== -1) || [];}
 
 if (typeof(web_link) != 'undefined') {web_link_and = web_link, web_link_ios = web_link, web_link_desk = web_link};

 if (typeof(store_link_ios) == 'undefined' || store_link_ios == '') {var store_link_ios = 'https://www.sberbank.com/ru/person/dist_services/sberbank-online-iphone'};
 
//  if (typeof(store_link_ios) == 'undefined') {var store_link_ios = 'https://www.sberbank.com/ru/person/dist_services/sberbank-online-iphone'};

 if (typeof(android_app) != 'undefined') {var android_app = ['ru.sberbankmobile']}; // need update 
 if (typeof(custom_params) == 'undefined') {var custom_params = false; var params_APP = ''; var params_WEB = ''};
 if (typeof(ext) == 'undefined') {var ext = true};
 if (typeof(pfa) == 'undefined') {var pfa = ext};
 if (typeof(pfa_name) == 'undefined') {var pfa_name = 'external_source='};
 if (typeof(params_AND) == 'undefined') {var params_AND = params_APP};
 if (typeof(params_IOS) == 'undefined') {var params_IOS = params_APP};
 if (typeof(web_link_desk) != 'undefined' && web_link_desk == '') {web_link_desk = 'http://www.sberbank.ru/ru/person/dist_services/inner_sbol'};
 if (typeof(web_link_and) != 'undefined' && web_link_and == '') {web_link_and = web_link_desk};
 if (typeof(web_link_ios) != 'undefined' && web_link_ios == '') {web_link_ios = web_link_desk};
 if (typeof(ios_apps_dp) == 'undefined') {var ios_apps_dp = ['','']};
 if (ios_apps_dp[0] == ''){
    if (ios_dp.search('^sberbankonline:') == 0) {
        ios_apps_dp = ['ios-app-smartonline://sbolonline/' + ios_dp.split('://')[1], 'btripsexpenses://sbolonline/' + ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1], 'sberbankonline://'+ios_dp.split('://')[1]]}
        else if (ios_dp.search('^sbolonline:') == 0) {
        ios_apps_dp = ['ios-app-smartonline://sbolonline/' + ios_dp.split('://')[1], 'btripsexpenses://sbolonline/' + ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1]]
        } else {ios_apps_dp[0] = ios_dp;}}
 // NEW APP iOS UPDATE
        if (ios_apps_dp[0].search('btripsexpenses') == 0){
            var newAPP = 'ios-app-smartonline://sbolonline/'+ ios_dp.split('://')[1];
            ios_apps_dp.unshift(newAPP);
         }
    // if (ios_dp.search('^sberbankonline:') == 0) {
    //     ios_apps_dp = ['youtube://' + ios_dp.split('://')[1], 'btripsexpenses://sbolonline/' + ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1], 'sberbankonline://'+ios_dp.split('://')[1]]}
    //     else if (ios_dp.search('^sbolonline:') == 0) {
    //     ios_apps_dp = ['youtube://' + ios_dp.split('://')[1], 'btripsexpenses://sbolonline/' + ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1]]
    //     } else {ios_apps_dp[0] = ios_dp;}}

 // NEW APP iOS UPDATE
//  if (ios_apps_dp[0].search('btripsexpenses') == 0){
//     var newAPP = 'youtube://'+ ios_dp.split('://')[1];
//     ios_apps_dp.unshift(newAPP);
//  }


 if (dlhref.search('need_web=true')>0) {var need_web = true};   //need update -- in template + store_link_ in logic
 if (dlhref.search('need_web=false')>0) {var need_web = false}; //need update -- in template + store_link_ in logic
 if (dlhref.search('external_source=true')>0) {var ext = true};
 if (dlhref.search('external_source=false')>0) {var ext = false}; 
 
 if (typeof(need_web) == 'undefined') {var need_web = false};//need update -- in template + store_link_ in logic
 if (typeof(need_web_and) == 'undefined') {var need_web_and = need_web};//need update -- in template + store_link_ in logic
 if (typeof(need_web_ios) == 'undefined') {var need_web_ios = need_web};//need update -- in template + store_link_ in logic
//  var host_href = new URL(location).hostname.match('[[a-z0-9-_]+.[a-z]+$')[0];
 var utm_name = ['utm_source=', 'utm_medium=', 'utm_campaign=', 'utm_content=', 'utm_term='];
 
 
 // Routing
 
 function routing(t) {

 type = t;
 
 cid = [getCookie('_ym_uid'), getCookie('_sv'), getCookie('___dmpkit___'), getCookie('top100_id')];
 
 if (cid[1] === '') {createCookie('_sv',custom_uid); cid[1]=custom_uid};
 if (cid[2] === '') {createCookie('___dmpkit___',custom_uid); cid[2]=custom_uid};
 if (cid[3] === '') {createCookie('top100_id',custom_uid); cid[3]=custom_uid};
 // Adriver need_update 

 if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('google')>=0 && document.referrer.search('google')<=15)) {var OrgEngn = 'google'};
 if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('yandex')>=0 && document.referrer.search('yandex')<=15)) {var OrgEngn = 'yandex'};
 
 // set utm-cookies
 if (dlhref.search('utm_source') < 0 && (OrgEngn)) {
 createCookie('utm_source', OrgEngn); createCookie('utm_medium','organic'); createCookie('utm_campaign',''); createCookie('utm_content','');
 } else if (utm_params_arr.length > 0) {
    function processArrayAndCreateCookies(arr) {
        const utmParamsFunc = {
          utm_source: '',
          utm_medium: '',
          utm_campaign: '',
          utm_content: '',
          utm_term: ''
        };
        arr.forEach(item => {
          const [key, value] = item.split('=');
          
          if (utmParamsFunc.hasOwnProperty(key)) {
            utmParamsFunc[key] = value || ''; 
          }
        });
        for (const [name, value] of Object.entries(utmParamsFunc)) {
          createCookie(name, value);
        }
      }
      processArrayAndCreateCookies(utm_params_arr);
 };

utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')];


function updateUrlWithUtmParameters(utm_cookie_arr) {
    const utmParamsKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

    // Parse the current URL
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);

    // Update/Add UTM parameters
    utm_cookie_arr.forEach((value, index) => {
        if (value !== '') {
            searchParams.set(utmParamsKeys[index], value);
        }
    });

    // Construct the new URL
    const newUrl = `${currentUrl.protocol}//${currentUrl.host}${currentUrl.pathname}?${searchParams.toString()}${currentUrl.hash}`;

    // Update the browser's history state
    window.history.replaceState({path: newUrl}, '', newUrl);
}

updateUrlWithUtmParameters(utm_cookie_arr);

     
 // Adriver
     src="https://content.adriver.ru/AdRiverFPS.js"
     !function(e,t){function r(e,t,r){t=t||"&",r=r||"=";var o=[];for(var n in e)e.hasOwnProperty(n)&&o.push(n+r+encodeURIComponent(e[n]));return o.join(t)}function o(e){var t={};if(e){var r=e.split("&");for(var o in r)if(r.hasOwnProperty(o)){var n=r[o].split("=");void 0!==n[0]&&void 0!==n[1]&&(t[n[0]]=decodeURIComponent(n[1]))}}return t}function n(e){return(/^\/\//.test(e)?"https:":"")+e}function i(e,t){var r=e.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return r?decodeURIComponent(r[2]):null}var d,a=document;"undefined"==typeof AdriverCounter&&(AdriverCounter=((d=function(e,t,r){var o=document.domain;if(!(this instanceof AdriverCounter))return d.items[e];d.urlParams=d.getUrlParameters(window.location.search.substring(1)),void 0!==d.urlParams.adrclid&&(t.fsid=d.urlParams.adrclid),null!==d.getCookie(document,"adrcid")&&(t.cid=d.getCookie(document,"adrcid")),r&&r.id&&null!==d.getCookie(document,r.id)&&(t.suid=o+"_"+encodeURIComponent(d.getCookie(document,r.id))),r&&r.gid1?t.gid1=r.gid1:null!==d.getCookie(document,"_ga")&&(t.gid1=encodeURIComponent(d.getCookie(document,"_ga"))),r&&r.yid1?t.yid1=r.yid1:null!==d.getCookie(document,"_ym_uid")&&(t.yid1=encodeURIComponent(d.getCookie(document,"_ym_uid"))),t.loc=encodeURIComponent(window.location.href),e=d.items.length||1,d.items[e]=this,t.ph=e,t.custom&&(t.custom=d.toQueryString(t.custom,";")),d.request(d.toQueryString(t))}).httplize=n,d.loadScript=function(e){try{var t=a.getElementsByTagName("head")[0],r=a.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("referrerpolicy","no-referrer-when-downgrade"),r.setAttribute("charset","windows-1251"),r.setAttribute("src",e.split("![rnd]").join(Math.round(1e6*Math.random()))),r.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(r.onload=null,t.removeChild(r))},r.onload=function(){t.removeChild(r)},t.insertBefore(r,t.firstChild)}catch(e){}},d.toQueryString=r,d.request=function(e){var t=d.toQueryString(d.defaults);d.loadScript(d.redirectHost+"/cgi-bin/erle.cgi?"+e+"&rnd=![rnd]"+(t?"&"+t:""))},d.getUrlParameters=o,d.getCookie=i,d.items=[],d.defaults={tail256:document.referrer||"unknown"},d.redirectHost="https://ad.adriver.ru",d.urlParams={},d)),new AdriverCounter(0,e,t)}
     ({sid:223989, bt:62},{id:"",gid1:"",yid1:""});


 // Android
 if (platform == 'android') {
 if (browser != "Firefox"){
 if (typeof(navigator.connection.downlink) != 'undefined') {ncdl = 'dl_' + navigator.connection.downlink} else {ncdl = 'dl_none'};
 if (typeof(navigator.connection.effectiveType) != 'undefined') {ncet = 'et_' + navigator.connection.effectiveType} else {ncet = 'et_none'};
 }
 if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues){
 navigator.userAgentData.getHighEntropyValues(["mobile","platform","platformVersion","model","uaFullVersion",]).then(result => {
 userData = ['mobile_'+result.mobile,'platform_'+result.platform,'platformVersion_'+result.platformVersion,'model_'+result.model,'uaFullVersion_'+result.uaFullVersion,].join('-__-');
 }).catch(error => {
 console.error("Error:", error);
 }).finally(() => {routing_android()})
 }else{
 routing_android()
 }
 
 function routing_android(){
    
 var web_and_data = get_final_web(web_link_and);
 if (android_dp.search('http') == 0){var app_data = get_final_web(android_dp);
 } else{
 var app_data = get_final_app(android_dp);}
 if (app_data.search("android-app")>=0) {
 var dp = app_data.split('://'),dp_and = 'intent://' + dp[1];
 } else {
 var dp_and = app_data;}
 if (app_data.search(/android-app:\/\/ru.sberbankmobile\/|sberbankonline/)>=0) {
 
    if (typeof(web_link_and_option) == 'undefined' || web_link_and_option == ''){
 
    if ((need_web_and == false) || (web_link_desk.search("person/dist_services/inner_apps") >= 0 && web_link_desk.search("person/dist_services/inner_apps/packs") <= 0 )) {
 
        if (browser == 'Opera' || browser == 'YaStart'|| browser == 'Miui 13+') {
            
    var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/|^sberbankonline:\/\/", "gm"), "intent://ru.sberbankmobile/android-app/ru.sberbankmobile") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + encodeURIComponent(web_and_data.replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web_and + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1])) + ";end"; 
 
    setTimeout(function () {dataLayerSL.push('info_and_app_deep', '', dp_and_opr)}, 100);

 } else if (browser == "Firefox") {

 setTimeout(function () {dataLayerSL.push('info_and_app_short', '', dp_and)}, 100);
 setTimeout(function () {dataLayerSL.push('final_and_store_r1', '', get_final_web('https://www.sberbank.com/ru/person/dist_services/sberbank-online-android')); }, 900);
 
} else {

var store_chr_ym_inner = '?round__two_and=none' + '&need_web=' + need_web_and + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1];

 setTimeout(function () {dataLayerSL.push('info_and_app_short', '', dp_and)}, 100);
 setTimeout(function () {dataLayerSL.push('', '', store_chr_ym_inner); }, 900);

 }
 } else {
 if (browser == 'Miui 12-' || browser == "Firefox") {
 setTimeout(function () {dataLayerSL.push('info_and_app_short', '', dp_and)}, 100);
 setTimeout(function () {dataLayerSL.push('final_and_web_r1', '', web_and_data)}, 900);
 
} else {

 var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/|^sberbankonline:\/\/", "gm"), "intent://ru.sberbankmobile/android-app/ru.sberbankmobile") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + encodeURIComponent(web_and_data.replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web_and + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1])) + ";end";
 setTimeout(function () {dataLayerSL.push('info_and_app_deep', '', dp_and_opr)}, 100);
 }
 }
 // need update
 } else {
    if (option == 1) {
     need_web_and = false;
 
    if (browser == 'Opera' || browser == 'YaStart'|| browser == 'Miui 13+') 
 {
 var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/|^sberbankonline:\/\/", "gm"), "intent://ru.sberbankmobile/android-app/ru.sberbankmobile") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + encodeURIComponent(web_and_data.replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web_and + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1])) + ";end";
 setTimeout(function () {dataLayerSL.push('info_and_app_deep', '', dp_and_opr)}, 100);
 
} else {

 var store_chr_ym_inner = "https://www.sberbank.com/sms/android_store" + '?external_source='  + app_data.split('external_source=')[1]  + '&sl=' + sl_name;
 setTimeout(function () {dataLayerSL.push('info_and_app_short', '', dp_and)}, 100);
 setTimeout(function () {dataLayerSL.push('final_and_store_r1', '', store_chr_ym_inner); }, 900);
 }
 } else if (option == 2) {
 setTimeout(function () {dataLayerSL.push('final_and_web_r1', '', web_and_data); }, 100);
 } else if (option == 3) {
 setTimeout(function () {dataLayerSL.push('final_and_web_r1', '', get_final_web(web_link_and_option)); }, 100);
 }
 }
 } else {
 
 setTimeout(function () {dataLayerSL.push('info_and_app_short', '', dp_and); }, 100);
 setTimeout(function () {dataLayerSL.push('final_and_web_r1', '', web_and_data); }, 900);
 
 }
 }
 }
 
 // iOS

 
 else if (platform == 'iPhone') {

 if (ios_apps_dp[0].search('http') == 0 ) {
 dataLayerSL.push('info_ios_web' + '__' + option + '__' + type, '', get_final_web(ios_apps_dp[0]));
 } else {
    
 if (need_web_ios == true && web_link_ios.search(/inner_apps|dist_services\/sberbank-online-android/) == -1 ){ //need update!!
 var web_data = encodeURIComponent(get_final_web(web_link_ios)); //need update!!
 } else {
 var web_data = encodeURIComponent(get_final_web(store_link_ios));} //need update!!
 var web_data_back = encodeURIComponent(get_final_web(web_link_ios)); //need update!!
 var app_data = get_final_app(ios_apps_dp[0]);
 ios_apps_dp[1] != '' && typeof(ios_apps_dp[1]) != 'undefined' ? next_app = encodeURIComponent(ios_apps_dp.slice(1)+','+ app_data.split(ios_apps_dp[0])[1].slice(1)) : next_app = '';
 
 dataLayerSL.push('info_ios_app' +'__'+ need_web_ios + '__' + 'none' + '__' + type, app_data.split(ios_apps_dp[0])[1].slice(1)+'-__-'+ios_apps_dp.join('-__-'), app_data);
 
 if (browser == 'Safari') {
 window.onblur = function () {
     dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data + '-__-' + web_data_back); 
 setTimeout(() => {
     dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_background_' + app_data  + '-__-' + '-__-' + web_data_back);
 }, 750);
 };
 } else {


  //  if no safari

 document.addEventListener("visibilitychange", () => {
 if (document.hidden) {

    dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_background_' + app_data  + '-__-' + '-__-' + web_data_back);
 }
 });

//   setTimeout(() => {
//  dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data + '-__-' + web_data_back); 
//  }, 1500) //need update

setInterval(() => {
    dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data + '-__-' + web_data_back);      
}, 2000);

}} 
 

  //Desktop
 
 } else { 
 
 dataLayerSL.push('info_desk' + '__' + option + '__' + type, '', get_final_web(web_link_desk));
 
 }
 }
 
 
 // GO!

 let go = true;
 document.addEventListener('yacounter31643078inited', function(){if (go) {go = false; 
     routing ('ym_event');}});
 setTimeout(() => {if (go) {go = false;
     routing ('timer');}}, 900);
 
 
 //***********************************************************ROUND TWO**********************************************************
 
 //R2 iOS
 
 } else {
 
    cid = [getCookie('_ym_uid'), getCookie('_sv'), getCookie('___dmpkit___'), getCookie('top100_id')];
    utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')];
 
 if (document.location.search.search('round__two_ios=') == 1) {
 
 var event_type = document.location.search.split('-__-')[1],next_app = document.location.search.split('-__-')[2],web_data = document.location.search.split('-__-')[3], web_data_back = document.location.search.split('-__-')[4];
     
     if (next_app != '') {
         next_app = decodeURIComponent(next_app).split(',');
         if (next_app[0].search('\\?') > 0) {
             var app_data = next_app[0] + '&' + next_app[next_app.length - 1];
         } else {
             var app_data = next_app[0] + '?' + next_app[next_app.length - 1];
         }
         if (next_app.length > 2) {
             next_app = encodeURIComponent(next_app.slice(1).join(','));
         } else {
             next_app = '';
         }
         
         if (browser == 'Safari') {
             window.onblur = function () {
                 noblurrun = false;
                 dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data + '-__-' + web_data_back); 

                 setTimeout(() => { dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_background_' + app_data + '-__-' + '-__-' + web_data_back); }, 650);
             }
         } else {
 
             document.addEventListener("visibilitychange", () => {
 
             dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_background_' + app_data  + '-__-' + '-__-' + web_data + '-__-' + web_data_back);
      });
 
            //  setTimeout(() => { dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data_back); }, 1500)

             setInterval(() => {

                //dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data_back);
                dataLayerSL.push('', '', '?round__two_ios=-__-' + 'final_ios_web' + '-__-' + next_app + '-__-' + web_data + '-__-' + web_data_back); 
                
            
                 }, 2000);


 
         }
 
         // go to deeplink
 
         dataLayerSL.push('', '', app_data)
 
 
 } else {
 
     // R2 YM
          ym(89867636, "init", {});
          ym(31643078, "init", {triggerEvent: true});
          
 
          function routing2 () {

var fwdi = decodeURIComponent(web_data);
if (event_type.search('background_')>0){
    var fai = event_type.split('background_');
    dataLayerSL.push('final_ios_background', fai[1]+'-__-'+fwdi, fwdi);
} else {
    dataLayerSL.push(event_type, '', fwdi); 
}



 }
 
 // GO 
 let go = true;
 document.addEventListener('yacounter31643078inited', function()
 {if (go){go = false;
         routing2 ();}});
 setTimeout(() => {if (go) {go = false;
     routing2 ();}}, 900);
 
 }
 
 
 // R2 Android
 
 } else if (document.location.search.search('round__two_and=') == 1) {

             // R2 YM
             ym(89867636, "init", {});
             ym(31643078, "init", {triggerEvent: true});
             
 var url = decodeURIComponent(document.location.href).split('round__two_and=')[1].split('&need_web=')[0].replace(new RegExp("_anchor_sl_", "gm"), "#")
 console.log(url)
 var need_web = decodeURIComponent(document.location.href).split('&need_web=')[1].split('&')[0].split(';')[0]
 var sl = decodeURIComponent(document.location.href).split('&sl=')[1].split('&')[0].split(';')[0]
 var external_source = decodeURIComponent(document.location.href).split('&external_source=')[1].split('&')[0].split(';')[0]
 if(need_web == 'true'){
 setTimeout(function(){dataLayerSL.push('final_and_web_r2', '', url); },300);
 } else {
 
 
 dataLayerSL.push('final_and_store_r2', 'sl=' + sl + '&external_source' + external_source, '') 
 setTimeout(function(){window.location.href = 'samsungapps://ProductDetail/ru.sberbankmobile'}, 50);
 // setTimeout(function(){window.location.href = 'mimarket://details?id=ru.sberbankmobile'}, 100);
 setTimeout(function(){window.location.href = 'hiapplink://com.huawei.appmarket?appId=C100994843'}, 200);
 setTimeout(function(){window.location.href = 'rustore://apps.rustore.ru/app/ru.sberbankmobile'}, 350);
 
 setTimeout(function(){window.location.href = 'https://apps.sber.ru/apps/sberbank-online/'}, 1100);
 }
 }
 }
