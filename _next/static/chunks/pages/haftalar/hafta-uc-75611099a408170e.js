(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{7805:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/haftalar/hafta-uc",function(){return n(5782)}])},7845:function(e,a,n){"use strict";var r=n(5893),i=n(5988),l=(new Date).getFullYear();a.Z={footer:(0,r.jsxs)("small",{style:{display:"block",marginTop:"8rem"},className:"jsx-7c359fde634f3543",children:[(0,r.jsx)("time",{className:"jsx-7c359fde634f3543",children:l})," \xa9 PauSiber",(0,r.jsx)(i.default,{id:"7c359fde634f3543",children:"a.jsx-7c359fde634f3543{float:right}\n@media screen and (max-width:480px) {article.jsx-7c359fde634f3543{padding-top:2rem;\npadding-bottom:4rem}}"})]})}},5782:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return h}});var r=n(5893),i=n(8616),l=n(3805),t=n(7845),s=n(1151);function d(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(a){d(e,a,n[a])}))}return e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=function(){var a=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",h4:"h4",pre:"pre",code:"code",br:"br",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{children:"Hafta 3"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Ama\xe7 :"})," Server kavram\u0131n\u0131n a\xe7\u0131klanmas\u0131, SSH Kullan\u0131m\u0131, Zamanlanm\u0131\u015f g\xf6revler olu\u015fturulmas\u0131."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Yazarlar :"})," ",(0,r.jsx)(a.a,{href:"https://github.com/boratanrikulu",children:(0,r.jsx)(a.strong,{children:"boratanrikulu"})})," ",(0,r.jsx)(a.strong,{children:"&&"})," ",(0,r.jsx)(a.a,{href:"https://github.com/hasantezcan",children:(0,r.jsx)(a.strong,{children:"hasantezcan"})})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h2,{children:"Server (Sunucu) Nedir ?"}),"\n",(0,r.jsx)(a.p,{children:"Server denince ak\u0131llara -filmlerin de etkisiyle- devasa b\xfcy\xfckl\xfckte hangarlar i\xe7ine s\u0131ra s\u0131ra istiflenmi\u015f, genelde siyah renkte dolaplar i\xe7inde bulunan, dikd\xf6rtgen \u015feklinde \xe7ekmeceler geliyor."}),"\n",(0,r.jsx)(a.p,{children:'Evet, ak\u0131llara gelen bu tablo ve tan\u0131m tamamen do\u011fru. Fakat bir "server" olu\u015fturmak i\xe7in t\xfcm bu sayd\u0131\u011f\u0131m\u0131z \u015feylere ihtiyac\u0131m\u0131z yok. Sadece bir bilgisayar, server olu\u015fturmak i\xe7in yeterli. Ve tabiki gerekli olan bir ileti\u015fim a\u011f\u0131.'}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{alt:"pwd",src:"/blog/images/hafta3/0.jpg",width:"800"})}),"\n",(0,r.jsx)(a.p,{children:"Yani server dedi\u011fimiz \u015feyler de asl\u0131nda birer bilgisayard\u0131r."}),"\n",(0,r.jsx)(a.p,{children:"Bir bilgisayar\u0131n server olarak \xe7al\u0131\u015fabilmesi i\xe7in; gerekli baz\u0131 yaz\u0131l\u0131mlara ve kulland\u0131\u011f\u0131 verileri iletim a\u011f\u0131na itebilecek - \xe7ekebilecek g\xfcce sahip olmas\u0131 gerekir."}),"\n",(0,r.jsxs)(a.p,{children:["Bu ",(0,r.jsx)(a.strong,{children:"g\xfc\xe7"})," bazen en ba\u015fta anlatt\u0131\u011f\u0131m\u0131z o hollywood vari tablodaki serverlar\u0131n g\xfcc\xfc gibi devasa bir g\xfcce sahip olurken, bazen de 20 dolarl\u0131k bir bilgisayar olan Raspberry Pi'\u0131n g\xfcc\xfc olabilir."]}),"\n",(0,r.jsxs)(a.p,{children:["Server'lar\u0131 y\xf6netmek i\xe7in her durumda fiziksel olarak m\xfcdahale edemeyiz. Uzaktan eri\u015fip y\xf6netmemiz gerekir. Bu gibi durumlarda ",(0,r.jsx)(a.strong,{children:"SSH protokol\xfc"})," kullan\u0131r."]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h2,{children:"SSH Protokol\xfc Nedir ?"}),"\n",(0,r.jsx)(a.p,{children:"SSH (Secure Shell), a\u011f \xfczerinde bulunan bir sunucuya ba\u011flanmaya ve ba\u011flan\u0131lan sunucu \xfczerinde komut \xe7al\u0131\u015ft\u0131rma, dosya transferi gibi i\u015flemleri ger\xe7ekle\u015ftirmeye olanak sa\u011flayan bir uzak sunucu ba\u011flant\u0131 protokol\xfcd\xfcr."}),"\n",(0,r.jsx)(a.p,{children:"SSH protokol\xfc; komut \xe7al\u0131\u015ft\u0131rma, dosya transferi gibi i\u015flemlerin d\u0131\u015f\u0131nda, g\xfcvenli ileti\u015fim kanallar\u0131 gerektiren durumlar\u0131n tamam\u0131nda kullan\u0131labilmektedir. \xd6rne\u011fin, POP3 mail protokol\xfc gibi ileti\u015fimini \u015fifrelenmemi\u015f \u015fekilde ger\xe7ekle\u015ftiren servisler SSH \xfczerinden aktar\u0131larak \u015fifreli ve g\xfcvenli duruma getirilebilirler."}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:"SSH Kullan\u0131m\u0131"}),"\n",(0,r.jsx)(a.p,{children:"SSH'\u0131n genel olarak kullan\u0131m\u0131 olduk\xe7a basittir. A\u015fa\u011f\u0131daki gibi bir yap\u0131 ile uzak server'\u0131m\u0131za; kullan\u0131c\u0131 ad\u0131 ve parola bilgisini kullanarak eri\u015febiliriz."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] ssh kullanc\u0131_ad\u0131@server_ip\n"})}),"\n",(0,r.jsxs)(a.p,{children:["SSH'\u0131n varsay\u0131lan port'u 22'dir. Fakat genellikle -her ne kadar gereklili\u011fi tart\u0131\u015f\u0131lsa da- sunucularda bu port g\xfcvenlik sebebi ile de\u011fi\u015ftirilmektedir. Ba\u011flant\u0131 sa\u011flan\u0131rken, sunucunun SSH ba\u011flant\u0131s\u0131n\u0131 kabul etmek amac\u0131yla dinledi\u011fini port'u belirtmek i\xe7in ",(0,r.jsx)(a.strong,{children:"-p"})," parametresi kullan\u0131l\u0131r."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] ssh kullanc\u0131_ad\u0131@server_ip -p port\n"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:"Parola ile Ba\u011flant\u0131 Kurmak Neden G\xfcvenli De\u011fil ?"}),"\n",(0,r.jsx)(a.p,{children:"Az \xf6nce kullan\u0131c\u0131 ad\u0131 ve parola bilgisi sa\u011flayan uzakta bulunan server'\u0131m\u0131za eri\u015fim sa\u011flad\u0131k. Fakat sizce bu g\xfcvenli mi ?"}),"\n",(0,r.jsxs)(a.p,{children:["Bizim a\xe7\u0131m\u0131za g\xf6re server'\u0131m\u0131za ",(0,r.jsx)(a.strong,{children:"parola ile uzaktan ba\u011flanmak g\xfcvenli bir y\xf6ntem de\u011fildir."})]}),"\n",(0,r.jsx)(a.p,{children:"Bunun belli ba\u015fl\u0131 sebepleri vard\u0131r; ssh ba\u011flant\u0131s\u0131n\u0131n bruteforce i\u015flemine a\xe7\u0131k olmas\u0131, herkese a\xe7\u0131k ortamlarda parolan\u0131n elle girilmesi uzaktan izleyen ki\u015filer taraf\u0131ndan parolan\u0131n tespit edilmesine yol a\xe7abilecek olmas\u0131 gibi fakt\xf6rler \xf6rnek verilebilir."}),"\n",(0,r.jsx)(a.p,{children:"Bu y\xfczden, server'\u0131m\u0131za eri\u015fim sa\u011flarken, ssh-key kullanmam\u0131z daha kullan\u0131\u015fl\u0131 ve g\xfcvenli olacakt\u0131r."}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:"SSH-Key Nedir ?"}),"\n",(0,r.jsx)(a.p,{children:"SSH-Key, parola kullanmadan SSH ba\u011flant\u0131lar\u0131 sa\u011flayabilmemizde kullan\u0131lan public ve private key \xe7iftine denir."}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:"SSH-Keygen ile Key Olu\u015fturulmas\u0131"}),"\n",(0,r.jsxs)(a.p,{children:["SSH-Key olu\u015fturmak olduk\xe7a basittir. A\u015fa\u011f\u0131daki komutu y\xfcr\xfctt\xfc\u011f\xfcn\xfczde size birka\xe7 soru sorduktan sonra key \xfcretilecektir. Key \xfcretimi sonucunda biri ",(0,r.jsx)(a.strong,{children:"public"})," di\u011feri ",(0,r.jsx)(a.strong,{children:"private"})," olmak \xfczere ",(0,r.jsx)(a.strong,{children:"iki adet key"})," olu\u015facakt\u0131r."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] ssh-keygen\n"})}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{alt:"ssh-keygen",src:"/blog/images/hafta3/1.png",width:"800"})}),"\n",(0,r.jsxs)(a.p,{children:["\xdcretilen keyler'den sonunda ",(0,r.jsx)(a.strong,{children:".pub"})," uzant\u0131s\u0131 bulunan sizin public key'inizdir. Bu key'i ba\u011flanmak istedi\u011finiz sunuculara eklemeniz gerekir."]}),"\n",(0,r.jsx)(a.p,{children:"Uzant\u0131s\u0131 bulunmayan key ise sizin private key'inizdir. Bu dosyay\u0131 kimse ile payla\u015fmamal\u0131s\u0131n\u0131z. SSH ile ba\u011flant\u0131 sa\u011flarken bu dosyay\u0131 kullanaca\u011f\u0131z."}),"\n",(0,r.jsxs)(a.p,{children:["Ek olarak private key'in izinleri ",(0,r.jsx)(a.strong,{children:"600"})," olarak ayarlanmal\u0131d\u0131r.",(0,r.jsx)(a.br,{}),"\n","Bunu uygulamak i\xe7in \xf6nceki haftan\u0131n dok\xfcman\u0131n\u0131 inceleyin : ",(0,r.jsx)(a.a,{href:"/blog/haftalar/hafta-iki",children:(0,r.jsx)(a.strong,{children:"hafta-iki"})})]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:"SSH-Key Kullanarak Ba\u011flant\u0131 Sa\u011flanmas\u0131"}),"\n",(0,r.jsx)(a.p,{children:"SSH-Key kullanarak ba\u011flant\u0131 sa\u011flamak i\xe7in a\u015fa\u011f\u0131daki komutu kullanabilirsiniz."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] ssh kullanc\u0131_ad\u0131@server_ip\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Ayr\u0131ca SSH-Key'i default path yerine ba\u015fka bir yere kay\u0131t ettiyseniz ",(0,r.jsx)(a.strong,{children:"-i"})," parametresini kullanarak bu path'i vermeniz gerekmektedir."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] ssh -i /path/to/private_key kullanc\u0131_ad\u0131@server_ip\n"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h4,{children:'".ssh/config" Dosyas\u0131n\u0131n Kullan\u0131m\u0131'}),"\n",(0,r.jsxs)(a.p,{children:["E\u011fer birden fazla sunucu ile u\u011fra\u015f\u0131yorsan\u0131z, her ba\u011flant\u0131 kurma a\u015famas\u0131nda IP girmek tam bir i\u015fkence. Bunun \xf6n\xfcne ge\xe7mek i\xe7in bilgisayar\u0131n\u0131zda a\u015fa\u011f\u0131daki gibi bir ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"${HOME}/.ssh/config"})})," dosyas\u0131 olu\u015fturabilirsiniz. Bu sayede IP'leri girmeden direkt olarak ",(0,r.jsx)(a.strong,{children:"ssh server_name"})," diyerek sunucunuz ile ba\u011flant\u0131 sa\u011flayabilirsiniz."]}),"\n",(0,r.jsxs)(a.p,{children:["Bunun i\xe7in ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.code,{children:"${HOME}/.ssh/config"})})," dosyas\u0131n\u0131 olu\u015fturun."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t[~$] touch ${HOME}/.ssh/config\n"})}),"\n",(0,r.jsx)(a.p,{children:"Ard\u0131ndan dosya i\xe7eri\u011fini a\u015fa\u011f\u0131daki yap\u0131ya uygun \u015fekilde ayarlay\u0131n."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"\t\tHost\t\t\tserver_name\n\t\tHostName\t\tserver_ip\n\t\tUser\t\t\tusername\n\t\tPort\t\t\t22\n\t\tIdentityFile\t/path/to/ssh-key\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Art\u0131k herhangi bir \u015fekilde IP girmek yerine direkt olarak ",(0,r.jsx)(a.strong,{children:"ssh server_name"})," diyerek sunucunuza ba\u011flanabilirsiniz."]}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(a.h2,{children:"Bu hafta neler yapt\u0131k ?"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Server'\u0131n ne oldu\u011funu,"}),"\n",(0,r.jsx)(a.li,{children:"SSH protokol\xfcn\xfcn ne oldu\u011funu,"}),"\n",(0,r.jsx)(a.li,{children:"SSH kullan\u0131m\u0131n\u0131,"}),"\n",(0,r.jsx)(a.li,{children:"SSH-Key'in ne oldu\u011funu,"}),"\n",(0,r.jsx)(a.li,{children:"SSH-Key kullanarak ba\u011flant\u0131 kurmay\u0131,"}),"\n",(0,r.jsx)(a.li,{children:"Parola yerine neden SSH-Key kulland\u0131\u011f\u0131m\u0131z\u0131 \xf6\u011frendik."}),"\n"]})]})},n=Object.assign({},(0,s.ah)(),e.components),i=n.wrapper;return i?(0,r.jsx)(i,u({},e,{children:(0,r.jsx)(a,{})})):a()}var c=(0,r.jsx)(o,{});function h(e){return(0,l.withSSG)((0,i.Z)({filename:"hafta-uc.mdx",route:"/haftalar/hafta-uc",meta:{title:"Hafta 3",date:"2020/5/5",description:"Server kavram\u0131n\u0131n a\xe7\u0131klanmas\u0131, SSH Kullan\u0131m\u0131, Zamanlanm\u0131\u015f g\xf6revler olu\u015fturulmas\u0131.",tag:"gnu/linux",author:"Enes Kaya"},pageMap:[{name:"haftalar",children:[{name:"hafta-bir",route:"/haftalar/hafta-bir",frontMatter:{title:"Hafta 1",date:"2022/5/5",description:"Linux'a giri\u015f.",tag:"gnu/linux",author:"Enes Kaya"}},{name:"hafta-iki",route:"/haftalar/hafta-iki",frontMatter:{title:"Hafta 2",date:"2021/5/5",description:"Linux'ta kullan\u0131c\u0131-grup y\xf6netimini ve dosya-dizin izinlerini kavratmak.",tag:"gnu/linux",author:"Enes Kaya"}},{name:"hafta-sifir",route:"/haftalar/hafta-sifir",frontMatter:{title:"Hafta 0",date:"2023/5/5",description:"Linux'un genel bir tan\u0131m\u0131. Gerekli kurulumlar\u0131n ger\xe7ekle\u015ftirilmesi.",tag:"gnu/linux",author:"Enes Kaya"}},{name:"hafta-uc",route:"/haftalar/hafta-uc",frontMatter:{title:"Hafta 3",date:"2020/5/5",description:"Server kavram\u0131n\u0131n a\xe7\u0131klanmas\u0131, SSH Kullan\u0131m\u0131, Zamanlanm\u0131\u015f g\xf6revler olu\u015fturulmas\u0131.",tag:"gnu/linux",author:"Enes Kaya"}},{name:"index",route:"/haftalar",frontMatter:{type:"posts",title:"Haftalar",date:"2021-03-18T00:00:00.000Z"}}],route:"/haftalar"},{name:"index",route:"/",frontMatter:{type:"page",title:"Hakk\u0131nda",date:"2021-03-19T00:00:00.000Z"}},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"}]},t.Z))(u({},e,{children:c}))}}},function(e){e.O(0,[774,353,888,179],(function(){return a=7805,e(e.s=a);var a}));var a=e.O();_N_E=a}]);