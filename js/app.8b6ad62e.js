(function(e){function t(t){for(var n,a,o=t[0],s=t[1],l=t[2],u=0,b=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a64":function(e,t,r){},"0db7":function(e,t,r){},1806:function(e,t,r){},"1ff5":function(e,t,r){"use strict";r("b2e9")},"55b2":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("830f"),i=r("5c40"),c={id:"router-wrapper",class:"font-sans"};function a(e,t){var r=Object(i["B"])("router-view");return Object(i["w"])(),Object(i["e"])("div",c,[Object(i["k"])(r,{"onFilter-check":e.filterCheck,"onSearch-submit":e.searchQuery,"onFavourite-check":e.favouriteCheck,allIngredients:e.allIngredients,filteredRecipes:e.filteredRecipes,theme:"photo",favourites:e.favourites,spooky:e.spooky,loading:e.loading,initialSearchPerformed:e.initialSearchPerformed},null,8,["onFilter-check","onSearch-submit","onFavourite-check","allIngredients","filteredRecipes","favourites","spooky","loading","initialSearchPerformed"])])}r("a623"),r("4de4"),r("a630"),r("caad"),r("a15b"),r("d81d"),r("b0c0"),r("d3b7"),r("6062"),r("2532"),r("3ca3"),r("ddb0");var o=r("b85c"),s={name:"App",components:{},methods:{filterCheck:function(e,t){t?this.checkedIngredients.push(e):(this.checkedIngredients=this.checkedIngredients.filter((function(t){return t!=e})),console.log(this.checkedIngredients))},searchQuery:function(e){var t=this;this.loading=!0,this.searchIngredients=e;var r="https://api.spoonacular.com/recipes/findByIngredients?apiKey=",n="&ingredients="+this.searchIngredients.join(",+")+"&number=30&limitLicense=true";fetch(r+"9243f861ab6541ed866866e7379b71ee"+n).then((function(e){return e.json()})).then((function(e){t.recipes=Array.from(e.map((function(e){return{id:e.id,title:e.title,image:e.image,ingredients:t.findIngredients(e)}}))),console.log(e),t.checkedIngredients=t.allIngredients,console.log(t.checkedIngredients),t.loading=!1,t.initialSearchPerformed=!0}))},findIngredients:function(e){var t,r=[],n=[],i=Object(o["a"])(e.usedIngredients);try{for(i.s();!(t=i.n()).done;){var c=t.value;r.includes(c.name)||(n.push({id:c.id,name:c.name,searched:!0}),r.push(c.name))}}catch(d){i.e(d)}finally{i.f()}var a,s=Object(o["a"])(e.missedIngredients);try{for(s.s();!(a=s.n()).done;){var l=a.value;r.includes(l.name)||(n.push({id:l.id,name:l.name,searched:!1}),r.push(l.name))}}catch(d){s.e(d)}finally{s.f()}return n},favouriteCheck:function(e){this.favourites.includes(e)?this.favourites=this.favourites.filter((function(t){return t!=e})):this.favourites.push(e)}},data:function(){return{searchIngredients:[],checkedIngredients:[],recipes:[],favourites:[],spooky:!1,loading:!1,initialSearchPerformed:!1}},computed:{filteredRecipes:function(){var e=this;return this.recipes.filter((function(t){return t.ingredients.every((function(t){return e.checkedIngredients.includes(t.name)}))}))},allIngredients:function(){var e,t=new Set,r=Object(o["a"])(this.recipes);try{for(r.s();!(e=r.n()).done;){var n,i=e.value,c=Object(o["a"])(i.ingredients);try{for(c.s();!(n=c.n()).done;){var a=n.value;t.add(a.name)}}catch(s){c.e(s)}finally{c.f()}}}catch(s){r.e(s)}finally{r.f()}return Array.from(t)}}};r("64be");s.render=a;var l=s,d=r("8c4f"),u=r("ac89"),b=r.n(u),p={class:"absolute top-0 left-0 w-screen h-screen flex items-start justify-center pl-10 pr-10 pb-10 overflow-y-scroll"},h={class:"relative mt-10 pl-4 pr-4 pt-10 pb-10 sm:p-12 sm:pt-10 rounded-md bg-white bg-opacity-75"},f=Object(i["k"])("img",{class:"ml-auto mr-auto mb-4 w-64",src:b.a},null,-1),m=Object(i["k"])("h1",{class:"text-center mb-4 w-64 text-2xl",style:{"font-family":"'Poppins'"}}," Recipe Search ",-1);function g(e,t){var r=Object(i["B"])("SearchBox");return Object(i["w"])(),Object(i["e"])(i["b"],null,[Object(i["k"])("div",{class:"sticky w-screen h-screen bg-cover",style:{backgroundImage:"url(".concat(e.backgroundUrl,")")}},null,4),Object(i["k"])("div",p,[Object(i["k"])("div",h,[f,m,Object(i["k"])(r,{theme:e.theme,"onSearch-submit":e.searchSubmit,itemType:"Ingredient"},null,8,["theme","onSearch-submit"])])])],64)}var j=r("9ff4"),v=Object(i["J"])("data-v-14e031e6");Object(i["z"])("data-v-14e031e6");var O={class:"ml-auto mr-auto relative w-64 p-4 pb-2 rounded-md border-opacity-50 shadow-2xl bg-white"},k={class:"text-center mb-4"},w={class:"flex justify-end items-center w-full mt-4"},y=Object(i["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-full h-full text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),x=Object(i["k"])("span",{class:"font-medium"},"FIND RECIPES",-1),I=Object(i["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6 ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1);Object(i["x"])();var B=v((function(e,t){var r=Object(i["B"])("SearchListItem");return Object(i["w"])(),Object(i["e"])("div",O,[Object(i["k"])("h1",k,Object(j["G"])(e.itemType)+"s",1),Object(i["k"])("ul",null,[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.listItems,(function(t,n){return Object(i["w"])(),Object(i["e"])(r,{"onRemove-item-submit":e.removeItem,key:n,itemName:t},null,8,["onRemove-item-submit","itemName"])})),128))]),Object(i["k"])("form",null,[Object(i["k"])("div",w,[Object(i["I"])(Object(i["k"])("input",{type:"text",class:"flex-grow bg-gray-100 border-solid border-b-2","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newItem=t}),placeholder:"new ingredient"},null,512),[[n["b"],e.newItem]]),Object(i["k"])("button",{onClick:t[2]||(t[2]=Object(n["c"])((function(){return e.addItem.apply(e,arguments)}),["prevent"])),class:"w-6 h-6 flex-shrink-0","aria-labelledby":"add-"+e.itemType+"-button-label"},[Object(i["k"])("span",{id:"add-"+e.itemType+"-button-label",hidden:""},"Add "+Object(j["G"])(e.itemType)+" to the list.",9,["id"]),y],8,["aria-labelledby"])])]),Object(i["k"])("button",{onClick:t[3]||(t[3]=Object(n["c"])((function(){return e.searchSubmit.apply(e,arguments)}),["prevent"])),class:"searchButton flex justify-around w-3/4 mt-4 p-2 rounded-md shadow-lg shadow-2xl bg-mustard text-gray-800"},[x,I])])})),C=r("2909"),S={class:"flex justify-between w-full mt-2"},F={class:"border-b-2 border-dashed"},R=Object(i["k"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none","aria-hidden":"true",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1);function A(e,t){return Object(i["w"])(),Object(i["e"])("li",S,[Object(i["k"])("span",F,Object(j["G"])(e.itemName),1),Object(i["k"])("button",{onClick:t[1]||(t[1]=Object(n["c"])((function(){return e.removeItem.apply(e,arguments)}),["prevent"])),class:"w-6 h-6 text-red-400","aria-labelledby":"add-"+e.itemName+"-button-label"},[Object(i["k"])("span",{id:"add-"+e.itemName+"-button-label",hidden:""},"Remove "+Object(j["G"])(e.itemName)+" from the list.",9,["id"]),R],8,["aria-labelledby"])])}var _={name:"SearchListItem",props:{itemType:String,itemName:String},data:function(){return{newItem:""}},emits:["remove-item-submit"],methods:{removeItem:function(){this.$emit("remove-item-submit",this.itemName)}}};_.render=A;var M=_,L={name:"SearchBox",components:{SearchListItem:M},props:{itemType:String,theme:String},data:function(){return{newItem:"",listItems:[]}},emits:["search-submit"],methods:{searchSubmit:function(){var e=Object(C["a"])(this.listItems);""!=this.newItem&&e.push(this.newItem),this.$emit("search-submit",e)},addItem:function(){this.listItems.includes(this.newItem)||this.listItems.push(this.newItem),this.newItem=""},removeItem:function(e){var t=this.listItems.filter((function(t){return t!=e}));this.listItems=t}}};r("b90c");L.render=B,L.__scopeId="data-v-14e031e6";var T=L,P=r("ad0f"),G=r.n(P),z=r("5e62"),$=r.n(z),N={components:{SearchBox:T},data:function(){return{windowWidth:window.innerWidth}},computed:{backgroundUrl:function(){return this.windowWidth<640?G.a:$.a}},props:{allIngredients:Array,filteredRecipes:Array,favourites:Array,loading:Boolean,initialSearchPerformed:Boolean},created:function(){window.addEventListener("resize",this.updateWindowSize)},unmounted:function(){window.removeEventListener("resize",this.updateWindowSize)},emits:["filter-check","search-submit","favourite-check"],methods:{filterCheck:function(e,t){this.$emit("filter-check",e,t)},searchSubmit:function(e){this.$emit("search-submit",e),this.$router.push({name:"results"})},reroute:function(){this.$router.push({name:"results"})},updateWindowSize:function(){this.windowWidth=window.innerWidth}}};N.render=g;var H=N,W={class:"bg-gray-200"},D={class:"large-screen-wrapper lg:grid lg:grid-cols-4"},J={class:"pt-6 pb-6 md:col-span-3 md:pl-10 md:pr-10 bg-gray-200"};function U(e,t){var r=Object(i["B"])("NavBar"),n=Object(i["B"])("FilterBox"),c=Object(i["B"])("RecipesList"),a=Object(i["B"])("FooterComponent");return Object(i["w"])(),Object(i["e"])(i["b"],null,[Object(i["k"])("div",W,[Object(i["k"])(r,{favourites:e.favourites,showFilter:!0,backHome:!1,title:"Results","onFilter-toggle":e.toggleFilter},null,8,["favourites","onFilter-toggle"]),Object(i["k"])("div",D,[Object(i["k"])("div",{class:["pt-2 pb-2 shadow-inner border-b bg-white",e.showFilters?"block":"hidden lg:h-full lg:block"]},[Object(i["k"])(n,{"onFilter-check":e.filterCheck,ingredients:e.allIngredients},null,8,["onFilter-check","ingredients"])],2),Object(i["k"])("div",J,[Object(i["k"])(c,{"onFavourite-check":e.favouriteCheck,recipeData:e.filteredRecipes,favourites:e.favourites,loading:e.loading,initialSearchPerformed:e.initialSearchPerformed,errorMessage:e.errorMessage,searched:!0,fullWidth:!1},null,8,["onFavourite-check","recipeData","favourites","loading","initialSearchPerformed","errorMessage"])])])]),Object(i["k"])(a)],64)}var E={class:"sm:flex flex-wrap pl-2 pb-2 pr-2"};function V(e,t){var r=Object(i["B"])("FilterListItem");return Object(i["w"])(),Object(i["e"])("div",E,[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.ingredients,(function(t){return Object(i["w"])(),Object(i["e"])(r,{"onFilter-check":e.filterCheck,key:"ingredient-filter-"+t,ingredient:t},null,8,["onFilter-check","ingredient"])})),128))])}var K=Object(i["J"])("data-v-44c80b20");Object(i["z"])("data-v-44c80b20");var Q={class:"checkbox__label"},Y={class:"checkbox__input"},q={class:"checkbox__control"},X={xmlns:"http://www.w3.org/2000/svg",fill:"none","aria-hidden":"true",viewBox:"0 0 24 24",class:"text-gray-700",stroke:"currentColor"},Z={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},ee={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"};Object(i["x"])();var te=K((function(e,t){return Object(i["w"])(),Object(i["e"])("div",{class:["flex justify-between mt-2 first:mt-0 sm:ml-2 p-2 w-full sm:w-auto shadow-sm rounded-lg",e.checked?"bg-green-200":"bg-gray-200"],onClick:t[2]||(t[2]=function(){return e.filterCheck.apply(e,arguments)})},[Object(i["k"])("label",{onClick:t[1]||(t[1]=Object(n["c"])((function(){}),["prevent"])),class:"checkbox w-full text-sm"},[Object(i["k"])("span",Q,Object(j["G"])(e.ingredient),1),Object(i["k"])("span",Y,[Object(i["k"])("input",{type:"checkbox",name:"checkbox",checked:e.checked},null,8,["checked"]),Object(i["k"])("span",q,[(Object(i["w"])(),Object(i["e"])("svg",X,[e.checked?(Object(i["w"])(),Object(i["e"])("path",Z)):Object(i["f"])("",!0),e.checked?Object(i["f"])("",!0):(Object(i["w"])(),Object(i["e"])("path",ee))]))])])])],2)})),re={name:"FilterListItem",components:{},props:{ingredient:String},data:function(){return{checked:!0}},emits:["filter-check"],methods:{filterCheck:function(){this.checked=!this.checked,this.$emit("filter-check",this.ingredient,this.checked)}}};r("1ff5");re.render=te,re.__scopeId="data-v-44c80b20";var ne=re,ie={name:"FilterBox",components:{FilterListItem:ne},props:{ingredients:Array},data:function(){return{listItems:[]}},emits:["filter-check"],methods:{filterCheck:function(e,t){this.$emit("filter-check",e,t)}}};ie.render=V;var ce=ie,ae={key:0,class:"p-4 pb-64"},oe={key:1,class:"p-4 pb-64"};function se(e,t){var r=Object(i["B"])("RecipeCard");return Object(i["w"])(),Object(i["e"])(i["b"],null,[e.loading?(Object(i["w"])(),Object(i["e"])("div",ae,"loading recipes...")):Object(i["f"])("",!0),!e.loading&&e.initialSearchPerformed&&0===e.recipeData.length?(Object(i["w"])(),Object(i["e"])("div",oe,Object(j["G"])(e.errorMessage),1)):Object(i["f"])("",!0),Object(i["k"])("div",{id:"recipeList",class:["flex flex-col items-center md:grid md:grid-cols-2 md:gap-4 pl-4 pr-4",e.fullWidth?"lg:grid-cols-3 lg:gap-10":"lg:grid-cols-2 lg:gap-10"]},[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.recipeData,(function(t){return Object(i["w"])(),Object(i["e"])(r,{"onFavourite-check":e.favouriteCheck,favourited:e.favourites.includes(t.id),key:t.id,recipe:t,searched:e.searched},null,8,["onFavourite-check","favourited","recipe","searched"])})),128))],2)],64)}var le=Object(i["J"])("data-v-73eacac5");Object(i["z"])("data-v-73eacac5");var de={class:"mt-4 w-full sm:w-96 md:w-full md:h-full bg-white overflow-hidden rounded-lg shadow-md"},ue={class:"relative bg-gray-200 pb-2/3"},be=Object(i["k"])("svg",{class:"w-full h-full",fill:"currentColor",stroke:"#48BB78",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),pe={class:"p-2"},he={class:"inline sm:text-lg mt-2"},fe={key:0,class:"text-green-500 sm:text-lg pl-1"},me={key:1},ge=Object(i["k"])("span",{class:"text-green-500"},"• ",-1),je={key:0},ve=Object(i["k"])("span",{class:"text-green-500"},"•",-1),Oe={key:0},ke={key:1};Object(i["x"])();var we=le((function(e,t){var r=Object(i["B"])("router-link"),c=Object(i["B"])("RecipeInfoBox");return Object(i["w"])(),Object(i["e"])("div",de,[Object(i["k"])("div",ue,[Object(i["k"])(r,{to:{name:"recipe",params:{id:e.recipe.id}}},{default:le((function(){return[Object(i["k"])("img",{class:"absolute w-full h-full object-cover",src:e.recipe.image},null,8,["src"])]})),_:1},8,["to"]),Object(i["k"])("button",{onClick:t[1]||(t[1]=Object(n["c"])((function(){return e.favouriteCheck.apply(e,arguments)}),["prevent"])),class:["relative float-right w-8 h-8 p-1 mr-2 mt-2 rounded-full bg-white bg-opacity-90",e.favourited?"text-green-500":"text-gray-100"],"aria-labelledby":"favourite-button-label-".concat(e.recipe.id)},[be,Object(i["k"])("span",{id:"favourite-button-label-".concat(e.recipe.id),hidden:""},"Add recipe to your favourites list",8,["id"])],10,["aria-labelledby"])]),Object(i["k"])("div",pe,[Object(i["k"])(r,{to:{name:"recipe",params:{id:e.recipe.id}}},{default:le((function(){return[Object(i["k"])("h3",he,Object(j["G"])(e.capitalise(e.recipe.title)),1),e.recipe.vegan?(Object(i["w"])(),Object(i["e"])("span",fe,"ⓥ")):Object(i["f"])("",!0)]})),_:1},8,["to"]),e.searched?Object(i["f"])("",!0):Object(i["k"])(c,{key:0,recipeId:e.recipe.id,recipeTime:e.recipe.readyInMinutes,author:e.recipe.creditsText,ingredients:e.searchedIngredients},null,8,["recipeId","recipeTime","author","ingredients"]),e.searched?(Object(i["w"])(),Object(i["e"])("div",me,[Object(i["k"])("ul",null,[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.searchedIngredients,(function(t,r){return Object(i["w"])(),Object(i["e"])("li",{class:"pt-2 text-sm",key:e.recipe.id+"-ingredient-"+r},[ge,Object(i["k"])("span",null,Object(j["G"])(t.toLowerCase()),1)])})),128))]),e.showIngredients?(Object(i["w"])(),Object(i["e"])("ul",je,[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.unsearchedIngredients,(function(t,r){return Object(i["w"])(),Object(i["e"])("li",{class:"pt-2 text-sm",key:e.recipe.id+"-ingredient-"+r},[ve,Object(i["j"])(" "+Object(j["G"])(t),1)])})),128))])):Object(i["f"])("",!0)])):Object(i["f"])("",!0),e.searched?(Object(i["w"])(),Object(i["e"])("button",{key:2,class:"float-right mb-2 text-sm text-green-700 italic",onClick:t[2]||(t[2]=Object(n["c"])((function(){return e.toggleIngredients.apply(e,arguments)}),["prevent"]))},[e.showIngredients?Object(i["f"])("",!0):(Object(i["w"])(),Object(i["e"])("span",Oe,"+ "+Object(j["G"])(e.unsearchedIngredients.length)+" more",1)),e.showIngredients?(Object(i["w"])(),Object(i["e"])("span",ke,"hide extras")):Object(i["f"])("",!0)])):Object(i["f"])("",!0)])])})),ye=(r("ac1f"),r("1276"),Object(i["J"])("data-v-22f44fa0"));Object(i["z"])("data-v-22f44fa0");var xe={class:"p-2"},Ie={key:0,class:"recipeInfoGrid\r\n\t\t\t      pt-2\r\n\t\t\t      text-sm italic"},Be=Object(i["k"])("svg",{class:"w-5 h-5 inline-block text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ce={key:1,class:"recipeInfoGrid pt-2"},Se=Object(i["k"])("svg",{class:"inline-block w-5 h-5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"})],-1),Fe={class:"recipeInfoGrid pt-2"},Re=Object(i["k"])("svg",{class:"inline-block w-5 h-5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})],-1),Ae={class:"inline-block"},_e={key:0,class:""},Me={key:1,class:""};Object(i["x"])();var Le=ye((function(e,t){return Object(i["w"])(),Object(i["e"])("div",xe,[e.recipeTime?(Object(i["w"])(),Object(i["e"])("div",Ie,[Be,Object(i["j"])(" "+Object(j["G"])(e.recipeTime)+" mins ",1)])):Object(i["f"])("",!0),e.author?(Object(i["w"])(),Object(i["e"])("div",Ce,[Se,Object(i["j"])(" "+Object(j["G"])(e.author),1)])):Object(i["f"])("",!0),Object(i["k"])("div",Fe,[Re,Object(i["k"])("ul",Ae,[(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.ingredients,(function(t,r){return Object(i["w"])(),Object(i["e"])("li",{class:"inline text-sm",key:e.recipeId+"-ingredient-"+r},[r!==e.ingredients.size-1?(Object(i["w"])(),Object(i["e"])("span",_e,Object(j["G"])(t.toLowerCase())+", ",1)):Object(i["f"])("",!0),r===e.ingredients.size-1?(Object(i["w"])(),Object(i["e"])("span",Me,Object(j["G"])(t.toLowerCase()),1)):Object(i["f"])("",!0)])})),128))])])])})),Te=(r("a9e3"),{name:"RecipeInfoBox",props:{recipeId:String,recipeTime:Number,author:String,ingredients:Set}});r("cb3e");Te.render=Le,Te.__scopeId="data-v-22f44fa0";var Pe=Te,Ge={name:"RecipeCard",components:{RecipeInfoBox:Pe},props:{recipe:Object,favourited:Boolean,searched:Boolean},computed:{searchedIngredients:function(){return this.searched?this.recipe.ingredients.filter((function(e){return e.searched})).map((function(e){return e.name})):new Set(this.recipe.extendedIngredients.map((function(e){return e.name})))},unsearchedIngredients:function(){return this.searched?this.recipe.ingredients.filter((function(e){return!e.searched})).map((function(e){return e.name})):null}},data:function(){return{showIngredients:!1}},emits:["favourite-check"],methods:{favouriteCheck:function(){this.$emit("favourite-check",this.recipe.id)},capitalise:function(e){return e.split(" ").map((function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()})).join(" ")},toggleIngredients:function(){this.showIngredients=!this.showIngredients}}};r("6321");Ge.render=we,Ge.__scopeId="data-v-73eacac5";var ze=Ge,$e={name:"RecipesList",components:{RecipeCard:ze},props:{recipeData:Array,favourites:Array,loading:Boolean,initialSearchPerformed:Boolean,errorMessage:String,searched:Boolean,fullWidth:Boolean},data:function(){return{}},emits:["favourite-check"],methods:{favouriteCheck:function(e){this.$emit("favourite-check",e)}}};$e.render=se;var Ne=$e,He=Object(i["J"])("data-v-5068e55e");Object(i["z"])("data-v-5068e55e");var We={class:"bg-mustard mt-10 pt-10 pl-2 pb-10 pr-2 md:pl-12 md:pr-12"},De=Object(i["i"])('<div class="large-screen-wrapper" data-v-5068e55e><h2 class="text-lg" data-v-5068e55e>Recipe Search</h2><h3 class="mt-4" data-v-5068e55e>API</h3><p data-v-5068e55e> The recipe information on this site is pulled from the <a target="_blank" rel="noopener" href="https://spoonacular.com/food-api/" data-v-5068e55e>spoonacular API</a>. </p><h3 class="mt-2" data-v-5068e55e>License &amp; Accuracy</h3><p data-v-5068e55e> As far as I can tell, the recipes included here should have an open license, but I&#39;ve included links to the original sites if you&#39;re interested in using any of them. Recipe and nutritional information is for illustrative purposes only. </p><h3 class="mt-2" data-v-5068e55e>About</h3><p data-v-5068e55e> This is a coding project made by <a href="https://www.peterfaulconbridge.com/portfolio" data-v-5068e55e>Pete Faulconbridge</a>, using <a target="_blank" rel="noopener" href="https://vuejs.org/" data-v-5068e55e>Vue.js</a> and <a target="_blank" rel="noopener" href="https://tailwindcss.com/" data-v-5068e55e>Tailwind CSS</a>. Icons from <a target="_blank" rel="noopener" href="https://heroicons.dev/" data-v-5068e55e>Heroicons</a>. The background image on the homepage is by <a target="_blank" rel="noopener" href="https://unsplash.com/@calumlewis" data-v-5068e55e>Calum Lewis on Unsplash</a>. </p></div>',1);Object(i["x"])();var Je=He((function(e,t){return Object(i["w"])(),Object(i["e"])("footer",We,[De])})),Ue={name:"FooterComponent"};r("5dbc");Ue.render=Je,Ue.__scopeId="data-v-5068e55e";var Ee=Ue,Ve={class:"bg-white pt-6 shadow-sm"},Ke={class:"large-screen-wrapper"},Qe=Object(i["k"])("div",{class:""},[Object(i["k"])("img",{class:"ml-auto mr-auto mb-4 w-64",src:b.a})],-1),Ye={class:"flex justify-between md:pl-10 md:pr-10"},qe=Object(i["k"])("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),Xe={class:"text-sm ml-2"},Ze={class:"mt-4 pt-4 pl-2 pb-4 pr-2 md:pl-12 md:pr-12 border-b bg-mustard"},et={class:"large-screen-wrapper flex items-baseline justify-between"},tt={class:"text-xl"},rt=Object(i["k"])("span",{class:"text-xs ml-2"},"Filter",-1),nt=Object(i["k"])("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1);function it(e,t){var r=Object(i["B"])("FavouriteMenuButton");return Object(i["w"])(),Object(i["e"])("header",Ve,[Object(i["k"])("nav",Ke,[Qe,Object(i["k"])("div",Ye,[Object(i["k"])("button",{onClick:t[1]||(t[1]=Object(n["c"])((function(){return e.routeBack.apply(e,arguments)}),["prevent"])),class:"flex items-center pl-2 text-gray-800"},[qe,Object(i["k"])("span",Xe,Object(j["G"])(e.backHome?"New Search":"Back"),1)]),Object(i["k"])(r,{favourites:e.favourites},null,8,["favourites"])])]),Object(i["k"])("div",Ze,[Object(i["k"])("div",et,[Object(i["k"])("h1",tt,Object(j["G"])(e.title),1),e.showFilter?(Object(i["w"])(),Object(i["e"])("button",{key:0,onClick:t[2]||(t[2]=Object(n["c"])((function(){return e.toggleFilter.apply(e,arguments)}),["prevent"])),class:"flex items-center text-gray-700 lg:hidden"},[rt,nt])):Object(i["f"])("",!0)])])])}var ct=Object(i["k"])("svg",{class:"w-8 h-8 absolute bottom-0 right-0",stroke:"currentColor",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),at=Object(i["k"])("span",{id:"favourite-button-label",hidden:""},"View your favourites list",-1),ot={class:"absolute bottom-0 right-0 text-xs text-white border-red-700 bg-red-700 bg-opacity-75 rounded-full w-auto h-auto pl-1 pr-1"};function st(e,t){return Object(i["w"])(),Object(i["e"])("button",{onClick:t[1]||(t[1]=Object(n["c"])((function(){return e.routeFavourites.apply(e,arguments)}),["prevent"])),class:"relative text-green-500 p-1 mr-2 rounded-full bg-white bg-opacity-50","aria-labelledby":"favourite-button-label"},[ct,at,Object(i["k"])("div",ot,Object(j["G"])(e.favourites.length),1)])}var lt={props:{favourites:Array},methods:{routeFavourites:function(){this.$router.push({name:"favourites"})}}};lt.render=st;var dt=lt,ut={name:"NavBar",components:{FavouriteMenuButton:dt},props:{favourites:Array,showFilter:Boolean,backHome:Boolean,title:String},emits:["filter-toggle"],methods:{toggleFilter:function(){this.$emit("filter-toggle")},routeBack:function(){console.log(this.backHome),this.backHome?this.$router.push({name:"home"}):this.$router.go(-1)}}};ut.render=it;var bt=ut,pt={name:"Results",components:{FilterBox:ce,RecipesList:Ne,FooterComponent:Ee,NavBar:bt},data:function(){return{showFilters:!1,errorMessage:"No recipes fit those criteria... :(  \n      Try adding more ingredients, or searching again."}},props:{allIngredients:Array,filteredRecipes:Array,favourites:Array,loading:Boolean,initialSearchPerformed:Boolean},emits:["filter-check","search-submit","favourite-check"],methods:{filterCheck:function(e,t){this.$emit("filter-check",e,t)},routeHome:function(){this.$router.push({name:"home"})},toggleFilter:function(){this.showFilters=!this.showFilters},favouriteCheck:function(e){this.$emit("favourite-check",e)}}};pt.render=U;var ht=pt,ft=Object(i["J"])("data-v-1c0beaa8");Object(i["z"])("data-v-1c0beaa8");var mt={class:"large-screen-wrapper"},gt={key:0},jt={class:"mlg:grid mlg:grid-cols-3 mlg:gap-4 mlg:items-center xl:pt-10"},vt={class:"relative mlg:col-span-2 w-full"},Ot=Object(i["k"])("svg",{class:"w-full h-full",fill:"currentColor",stroke:"#48BB78",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(i["k"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),kt={class:""},wt={class:"ml-2 mr-2 md:ml-4 md:mr-4 xl:ml-0 xl:mr-0 md:inline-block"},yt={class:"inline-block mt-4 mlg:mt-12"},xt={key:0,class:"text-green-700 pl-1"},It=Object(i["k"])("p",{class:"pt-2"}," They're a litte contentious, but it's common for online recipes to be prefaced with a fairly long essay before you get to the recipe. (I'm 50/50 on this: sometimes I'm impatient, but sometimes I learn something new!) The API I'm using here doesn't reliably provide this. So, because I'm making this for an exercise, rather than as a live product, I thought I'd just include some filler text here, to simulate the opening essay for layout purposes. ",-1),Bt={class:"pt-2"},Ct=Object(i["j"])(" So whilst I'm pulling the ingredient and timing information from the API, the information provided here is just illustrative. If you'd like to actually see the recipe for the current dish, you can check it out on the original website: "),St=Object(i["j"])(". "),Ft={class:"md:grid md:grid-cols-2 md:gap-4 md:ml-4 md:mr-4 xl:ml-0 xl:mr-0"},Rt={class:"mt-8 p-2 border-2 border-green-500 border-dotted"},At={class:"w-full"},_t=Object(i["k"])("thead",null,[Object(i["k"])("tr",null,[Object(i["k"])("td",null,[Object(i["k"])("h3",null,"Ingredient")]),Object(i["k"])("td",{class:"text-right"},[Object(i["k"])("h3",null,"Quantity")])])],-1),Mt={class:"text-right"},Lt=Object(i["k"])("div",{class:"mt-2 md:mt-8 p-2 border-2 border-green-500 border-dotted"},[Object(i["k"])("h3",null,"Instructions"),Object(i["k"])("ol",{class:"stepList pt-2"},[Object(i["k"])("li",null,"Read the real instructions"),Object(i["k"])("li",null,"Get ingredients"),Object(i["k"])("li",null,"Do something with them"),Object(i["k"])("li",null,"Enjoy!")])],-1);Object(i["x"])();var Tt=ft((function(e,t){var r=Object(i["B"])("NavBar"),c=Object(i["B"])("RecipeInfoBox"),a=Object(i["B"])("FooterComponent");return Object(i["w"])(),Object(i["e"])(i["b"],null,[Object(i["k"])(r,{favourites:e.favourites,showFilter:!1,backHome:!1,title:"Recipe: ".concat(e.recipe.title)},null,8,["favourites","title"]),Object(i["k"])("article",mt,[e.loading?(Object(i["w"])(),Object(i["e"])("p",gt,"loading...")):Object(i["f"])("",!0),Object(i["k"])("div",jt,[Object(i["k"])("div",vt,[Object(i["k"])("img",{class:"w-full",src:e.recipe.image},null,8,["src"]),Object(i["k"])("button",{onClick:t[1]||(t[1]=Object(n["c"])((function(){return e.favouriteCheck.apply(e,arguments)}),["prevent"])),class:["absolute top-0 right-0 w-8 h-8 p-1 mr-2 mt-2 rounded-full bg-white bg-opacity-90",e.favourited?"text-green-500":"text-gray-100"],"aria-labelledby":"favourite-button-label-".concat(e.recipe.id)},[Ot,Object(i["k"])("span",{id:"favourite-button-label-".concat(e.recipe.id),hidden:""},"Add recipe to your favourites list",8,["id"])],10,["aria-labelledby"])]),Object(i["k"])(c,{class:"mlg:inline-block hidden mlg:mr-4 border-green-500 border-2 rounded",recipeId:e.recipe.id,recipeTime:e.recipe.readyInMinutes,author:e.recipe.creditsText,ingredients:e.ingredients,searched:"false"},null,8,["recipeId","recipeTime","author","ingredients"])]),Object(i["k"])("div",kt,[Object(i["k"])("div",wt,[Object(i["k"])("h1",yt,Object(j["G"])(e.recipe.title),1),Object(i["k"])(c,{class:"inline-block mlg:hidden md:float-right w-full md:w-64 mt-2 md:mt-12 md:ml-2 sm:pl-4 sm:pr-4 border-green-500 border-2 rounded",recipeId:e.recipe.id,recipeTime:e.recipe.readyInMinutes,author:e.recipe.creditsText,ingredients:e.ingredients,searched:"false"},null,8,["recipeId","recipeTime","author","ingredients"]),e.recipe.vegan?(Object(i["w"])(),Object(i["e"])("span",xt,"ⓥ")):Object(i["f"])("",!0),It,Object(i["k"])("p",Bt,[Ct,Object(i["k"])("a",{class:"border-b border-gray-900 border-dotted",target:"_blank",rel:"noopener",href:e.recipe.sourceUrl},Object(j["G"])(e.recipe.sourceName),9,["href"]),St])]),Object(i["k"])("div",Ft,[Object(i["k"])("div",Rt,[Object(i["k"])("table",At,[_t,(Object(i["w"])(!0),Object(i["e"])(i["b"],null,Object(i["A"])(e.recipe.extendedIngredients,(function(t){return Object(i["w"])(),Object(i["e"])("tr",{key:e.recipe.id+"-"+t.name,class:"border-b border-gray-200"},[Object(i["k"])("td",null,Object(j["G"])(t.name),1),Object(i["k"])("td",Mt,Object(j["G"])(t.measures.us.amount)+" "+Object(j["G"])(t.measures.us.unitShort),1)])})),128))])]),Lt])])]),Object(i["k"])(a)],64)})),Pt=(r("25f0"),r("96cf"),r("1da1")),Gt={props:{favourites:Array},components:{RecipeInfoBox:Pe,FooterComponent:Ee,NavBar:bt},data:function(){return{loading:!0,recipe:{}}},computed:{ingredients:function(){return void 0!==this.recipe.extendedIngredients?this.recipe.extendedIngredients.map((function(e){return e.name})):[]},favourited:function(){return this.favourites.includes(parseInt(this.$route.params.id))}},created:function(){var e=this;return Object(Pt["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r="https://api.spoonacular.com/recipes/",n=e.$route.params.id,i="/information?apiKey=",fetch(r+n.toString()+i+"9243f861ab6541ed866866e7379b71ee").then((function(e){return e.json()})).then((function(t){e.recipe=t,e.loading=!1}));case 4:case"end":return t.stop()}}),t)})))()},emits:["favourite-check"],methods:{favouriteCheck:function(){this.$emit("favourite-check",this.recipe.id)}}};r("bc54");Gt.render=Tt,Gt.__scopeId="data-v-1c0beaa8";var zt=Gt,$t={key:0},Nt={class:"pb-6 h-full bg-gray-200"},Ht={class:"large-screen-wrapper pt-6 md:pl-10 md:pr-10 bg-gray-200"};function Wt(e,t){var r=Object(i["B"])("NavBar"),n=Object(i["B"])("RecipesList"),c=Object(i["B"])("FooterComponent");return Object(i["w"])(),Object(i["e"])(i["b"],null,[e.loadingRecipes?(Object(i["w"])(),Object(i["e"])("p",$t,"loading...")):Object(i["f"])("",!0),Object(i["k"])("div",Nt,[Object(i["k"])(r,{favourites:e.favourites,showFilter:!1,backHome:!1,title:"Favourites"},null,8,["favourites"]),Object(i["k"])("div",Ht,[Object(i["k"])(n,{"onFavourite-check":e.favouriteCheck,recipeData:e.favouriteRecipes,favourites:e.favourites,loading:e.loading,initialSearchPerformed:e.initialSearchPerformed,errorMessage:e.errorMessage,searched:!1,fullWidth:!0},null,8,["onFavourite-check","recipeData","favourites","loading","initialSearchPerformed","errorMessage"])])]),Object(i["k"])(c)],64)}var Dt=Object(i["J"])("data-v-586953ca");Object(i["z"])("data-v-586953ca");var Jt={class:"footer bg-mustard pt-10 pl-2 pb-10 pr-2 md:pl-12 md:pr-12"},Ut=Object(i["i"])('<h2 class="text-lg" data-v-586953ca>Recipe Search</h2><h3 class="mt-4" data-v-586953ca>API</h3><p data-v-586953ca> The recipe information on this site is pulled from the <a target="_blank" rel="noopener" href="https://spoonacular.com/food-api/" data-v-586953ca>spoonacular API</a>. </p><h3 class="mt-2" data-v-586953ca>License &amp; Accuracy</h3><p data-v-586953ca> As far as I can tell, the recipes included here should have an open license, but I&#39;ve included links to the original sites if you&#39;re interested in using any of them. Recipe and nutritional information is for illustrative purposes only. </p><h3 class="mt-2" data-v-586953ca>About</h3><p data-v-586953ca> This is a coding project made by <a href="https://www.peterfaulconbridge.com/portfolio" data-v-586953ca>Pete Faulconbridge</a>, using <a target="_blank" rel="noopener" href="https://vuejs.org/" data-v-586953ca>Vue.js</a> and <a target="_blank" rel="noopener" href="https://tailwindcss.com/" data-v-586953ca>Tailwind CSS</a>. Icons from <a target="_blank" rel="noopener" href="https://heroicons.dev/" data-v-586953ca>Heroicons</a>. The background image on the homepage is by <a target="_blank" rel="noopener" href="https://unsplash.com/@calumlewis" data-v-586953ca>Calum Lewis on Unsplash</a>. </p>',7);Object(i["x"])();var Et=Dt((function(e,t){return Object(i["w"])(),Object(i["e"])("div",Jt,[Ut])})),Vt={name:"Footer"};r("b0fa");Vt.render=Et,Vt.__scopeId="data-v-586953ca";var Kt=Vt,Qt={components:{RecipesList:Ne,NavBar:bt,FooterComponent:Kt},created:function(){var e=this;return Object(Pt["a"])(regeneratorRuntime.mark((function t(){var r,n,i,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r="https://api.spoonacular.com/recipes/",n="/information?apiKey=",i=Object(o["a"])(e.favourites);try{for(i.s();!(c=i.n()).done;)a=c.value,fetch(r+a+n+"9243f861ab6541ed866866e7379b71ee").then((function(e){return e.json()})).then((function(t){console.log(t),e.favouriteRecipes.push(t)}))}catch(s){i.e(s)}finally{i.f()}e.loadingRecipes=!1;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{favouriteRecipes:[],loadingRecipes:!0,errorMessage:"You haven't added any recipes to your favourites yet."}},props:{allIngredients:Array,filteredRecipes:Array,loading:Boolean,favourites:Array,initialSearchPerformed:Boolean},emits:["filter-check","search-submit","favourite-check"],methods:{routeBack:function(){this.$router.go(-1)},favouriteCheck:function(e){this.$emit("favourite-check",e)}}};Qt.render=Wt;var Yt=Qt,qt=Object(d["a"])({history:Object(d["b"])(),routes:[{name:"home",path:"/",component:H},{name:"results",path:"/results/",component:ht},{name:"recipe",path:"/recipe/:id",component:zt},{name:"favourites",path:"/favourites/",component:Yt}]}),Xt=(r("def6"),Object(n["a"])(l));Xt.use(qt),Xt.mount("#app")},"5dbc":function(e,t,r){"use strict";r("ff7b")},"5e62":function(e,t,r){e.exports=r.p+"img/calum-lewis-vA1L1jRTM70-unsplash-med.4fbf93c1.jpg"},6321:function(e,t,r){"use strict";r("0a64")},"64be":function(e,t,r){"use strict";r("98e6")},"98e6":function(e,t,r){},ac89:function(e,t,r){e.exports=r.p+"img/spoon-logo-no-outline.b2bdc58d.svg"},ad0f:function(e,t,r){e.exports=r.p+"img/calum-lewis-vA1L1jRTM70-unsplash-small.4a2bb897.jpg"},b0fa:function(e,t,r){"use strict";r("55b2")},b2e9:function(e,t,r){},b90c:function(e,t,r){"use strict";r("1806")},bc54:function(e,t,r){"use strict";r("f4fd")},cb3e:function(e,t,r){"use strict";r("0db7")},def6:function(e,t,r){},f4fd:function(e,t,r){},ff7b:function(e,t,r){}});
//# sourceMappingURL=app.8b6ad62e.js.map