//>>built
define("lsmb/parts/PartStore",["dojo/store/Memory","dojo/store/Observable","dojo/request","dojo/_base/array","dojo/Evented"],function(c,d,e,f,g){var b=new d(new c({idProperty:"text",emitter:new g}));e.get("parts.pl?action\x3dpartslist_json",{handleAs:"json"}).then(function(h){f.forEach(h,function(a){a.text=a.partnumber;a.label=a.partnumber+"--"+a.description;b.put(a)});b.emitter.emit("accountstore_loadcomplete",{bubbles:!0,cancelable:!1})},function(b){});return b});
//# sourceMappingURL=PartStore.js.map