/*#@_@#版本号，程序编号#@_@#*/
var application;
app={name:"WenzhouQilong",version:"2020.06.10"};
/*#@_@#
载入前检查
	1 程序有效性
	2 版本
#@_@#*/


function deleteCookie(cookieName){
	document.cookie=cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
function getCookie(cookieName){
	var cookieNameEqual,cookies,i,n;
	
	cookieNameEqual=cookieName + "=";
	cookies=document.cookie.split('; ');
	n=cookies.length;
	
	for(i=0;i<n;i++){
		if(cookies[i].indexOf(cookieNameEqual)==0){
			return cookies[i].substring(cookieNameEqual.length,cookies[i].length);
		}
	}
	return "";
}
function addToItemList(itemId){
	var itemIds;
	itemIds=getCookie("itemIds");
	itemIds=itemIds===""?itemId:itemIds + "," + itemId;
	document.cookie="itemIds=" + itemIds + "; path=/";
}