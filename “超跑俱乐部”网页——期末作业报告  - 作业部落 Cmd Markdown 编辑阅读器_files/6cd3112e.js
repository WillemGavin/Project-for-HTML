/*! zybuluo */
$(function(){function a(){++l===m&&(c(null),d.populateNoteRemarks())}var b=com.zybuluo.mdeditor.user_note.initData,c=com.zybuluo.mdeditor.common.applyPreviewElementTheme,d=com.zybuluo.mdeditor.sideRemark,e=com.zybuluo.common.getCurrentScreenType().isMobile;$editorReaderFull=$("#editor-reader-full"),e===!0?$editorReaderFull.css("padding-right","25px"):$editorReaderFull.css("padding-right","75px"),com.zybuluo.mdeditor.common.initiateSearchFileComponent(),$(".article-updated-date").text(new Date($(".article-updated-date").text()).format("Y-m-d H:i")),$("#file-list .file-item").each(function(){var a=$(this),b=a.attr("file-created-date");a.attr("file-created-date",new Date(b).format("Y-m-d H:i:s"));var c=a.children("a"),d=c.attr("title"),e=d.match(/([\d-]+T[\d:\.]+Z)/)[1],f=d.replace(e,new Date(e).format("Y-m-d H:i"));c.attr("title",f)});var f=function(){window.open(b.mdeditorUrl)};$("#preview-editor-button").on("click",f);var g=com.zybuluo.mdeditor.common.initialHiddenSideToolBar;g.hideToolBarForMobile(),$("ul#file-list li a").on("click",function(a){a.preventDefault();var b=$(this).attr("href");window.location=b}),com.zybuluo.mdeditor.common.loadSiteTheme();var h=com.zybuluo.mdeditor.common.switchSiteTheme;$("#preview-theme-button").on("click",function(){h()}),$('#wmd-preview a:not([href^="#"])').each(function(){$(this).attr("target","_blank")});var i=com.zybuluo.mdeditor.toc;i.renderToc(),com.zybuluo.mdeditor.common.bindingFullScreenApi("#preview-fullscreen-button");var j=_.debounce(function(){com.zybuluo.mdeditor.common.resetMaxHeightOfFileList(),d.relocateRemarkIcons(),d.relocateSideRemark()},200);$(window).resize(j),com.zybuluo.mdeditor.common.resetMaxHeightOfFileList();var k=$("#wmd-preview"),l=0,m=2;k.waitForImages(a),MathJax.Hub.Queue(["Typeset",MathJax.Hub,"wmd-preview"]),MathJax.Hub.Queue(a);var n=com.zybuluo.common.browserType,o="keydown";if((n.isOpera||n.isFirefox)&&(o="keypress"),$(document).on(o,function(a){if((a.ctrlKey||a.metaKey)&&!a.shiftKey){var b=a.charCode||a.keyCode,c=String.fromCharCode(b).toLowerCase();switch(c){case"y":if(a.altKey){h();break}return;case"f":if(a.altKey){$("#preview-list-button > span").dropdown("toggle");break}return;case"o":if(a.altKey){$("#preview-toc-button > span").dropdown("toggle");break}return;case"m":if(a.altKey){f();break}return;case"i":if(a.altKey){g.hideToolBar();break}return;default:return}a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1)}}),b.passwordPassed===!1){var p=com.zybuluo.common.popupConfirm.popup,q="输入访问密码",r="此文稿作者已设置访问密码，请输入密码后阅读文稿";p(q,r,function(){$("#form-publish-password").submit()},null,function(){var a=$("#notification-popup-window .modal-body");a.append('<form id="form-publish-password" action="'+window.location.href+'" class="input-prepend" method="POST"> <span class="add-on"> <i class="icon-lock"></i> </span><input name="publish_password" class="span3" type="password" placeholder="输入访问密码"></form>')},null)}});