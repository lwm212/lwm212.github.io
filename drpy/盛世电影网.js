muban.首图.二级.title = 'h1&&Text;.data:eq(2)&&Text';
muban.首图.二级.desc = '.data:eq(1)&&Text;;;.data:eq(4)&&Text;.data:eq(5)&&Text';
var rule={
    title:'盛世电影网',
    模板:'首图',
    host:'http://www.92shengshi.com',
    // url:'/sslist/fyclass-fypage.html',
    url:'/pianshow/id/fyclassfyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.area}}{{fl.by}}{{fl.class}}{{fl.letter}}/page/fypage{{fl.year}}',
    filter: {
        "dianying":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"动作","v":"/class/动作"},{"n":"情色","v":"/class/情色"},{"n":"剧情","v":"/class/剧情"},{"n":"科幻","v":"/class/科幻"},{"n":"动画","v":"/class/动画"},{"n":"悬疑","v":"/class/悬疑"},{"n":"古装","v":"/class/古装"},{"n":"犯罪","v":"/class/犯罪"},{"n":"运动","v":"/class/运动"},{"n":"同性","v":"/class/同性"},{"n":"惊悚","v":"/class/惊悚"},{"n":"冒险","v":"/class/冒险"},{"n":"音乐","v":"/class/音乐"},{"n":"历史","v":"/class/历史"},{"n":"奇幻","v":"/class/奇幻"},{"n":"恐怖","v":"/class/恐怖"},{"n":"战争","v":"/class/战争"},{"n":"传记","v":"/class/传记"},{"n":"歌舞","v":"/class/歌舞"},{"n":"武侠","v":"/class/武侠"},{"n":"灾难","v":"/class/灾难"},{"n":"西部","v":"/class/西部"},{"n":"短片","v":"/class/短片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"德国","v":"/area/德国"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"印度","v":"/area/印度"},{"n":"泰国","v":"/area/泰国"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"爱尔兰","v":"/area/爱尔兰"},{"n":"瑞典","v":"/area/瑞典"},{"n":"巴西","v":"/area/巴西"},{"n":"丹麦","v":"/area/丹麦"},{"n":"华语","v":"/area/华语"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "dianshiju":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"悬疑","v":"/class/悬疑"},{"n":"武侠","v":"/class/武侠"},{"n":"古装","v":"/class/古装"},{"n":"家庭","v":"/class/家庭"},{"n":"同性","v":"/class/同性"},{"n":"犯罪","v":"/class/犯罪"},{"n":"科幻","v":"/class/科幻"},{"n":"恐怖","v":"/class/恐怖"},{"n":"历史","v":"/class/历史"},{"n":"战争","v":"/class/战争"},{"n":"动作","v":"/class/动作"},{"n":"冒险","v":"/class/冒险"},{"n":"传记","v":"/class/传记"},{"n":"剧情","v":"/class/剧情"},{"n":"奇幻","v":"/class/奇幻"},{"n":"惊悚","v":"/class/惊悚"},{"n":"灾难","v":"/class/灾难"},{"n":"歌舞","v":"/class/歌舞"},{"n":"音乐","v":"/class/音乐"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"德国","v":"/area/德国"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"印度","v":"/area/印度"},{"n":"泰国","v":"/area/泰国"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"爱尔兰","v":"/area/爱尔兰"},{"n":"瑞典","v":"/area/瑞典"},{"n":"巴西","v":"/area/巴西"},{"n":"丹麦","v":"/area/丹麦"},{"n":"华语","v":"/area/华语"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "dongman":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"悬疑","v":"/class/悬疑"},{"n":"武侠","v":"/class/武侠"},{"n":"古装","v":"/class/古装"},{"n":"运动","v":"/class/运动"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"科幻","v":"/class/科幻"},{"n":"恐怖","v":"/class/恐怖"},{"n":"历史","v":"/class/历史"},{"n":"战争","v":"/class/战争"},{"n":"动作","v":"/class/动作"},{"n":"冒险","v":"/class/冒险"},{"n":"传记","v":"/class/传记"},{"n":"剧情","v":"/class/剧情"},{"n":"奇幻","v":"/class/奇幻"},{"n":"惊悚","v":"/class/惊悚"},{"n":"灾难","v":"/class/灾难"},{"n":"歌舞","v":"/class/歌舞"},{"n":"音乐","v":"/class/音乐"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"德国","v":"/area/德国"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"印度","v":"/area/印度"},{"n":"泰国","v":"/area/泰国"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"爱尔兰","v":"/area/爱尔兰"},{"n":"瑞典","v":"/area/瑞典"},{"n":"巴西","v":"/area/巴西"},{"n":"丹麦","v":"/area/丹麦"},{"n":"华语","v":"/area/华语"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
        "jilupian":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"德国","v":"/area/德国"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"印度","v":"/area/印度"},{"n":"泰国","v":"/area/泰国"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"加拿大","v":"/area/加拿大"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"爱尔兰","v":"/area/爱尔兰"},{"n":"瑞典","v":"/area/瑞典"},{"n":"巴西","v":"/area/巴西"},{"n":"丹麦","v":"/area/丹麦"},{"n":"华语","v":"/area/华语"},{"n":"欧美","v":"/area/欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
    },
    searchUrl:'/sopian/page/fypage/wd/**.html',
    class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(5);a&&Text;a&&href;/(\\w+).html',
}