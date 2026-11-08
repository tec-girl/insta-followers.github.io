"use strict";
/* insta-followers — 100% local. Spanish is the DOM language; dictionaries translate the rest. */
const I18N = {
es:{update:"Actualizar datos",cached:"Mostrando tus datos guardados del {d} — sube una exportación nueva para actualizarlos.",h1:"¿Quién no te sigue de vuelta?",sub:"Compara tus seguidores y seguidos de Instagram y descubre las dos diferencias: a quién sigues sin que te siga, y quién te sigue sin que lo sigas.",priv:"100% privado: tus archivos se procesan en tu dispositivo. Nada se sube a ningún servidor.",how:"Cómo funciona",s1:"En Instagram ve a Configuración → Centro de cuentas → Tu información y permisos → Descargar tu información.",s2:"Pide la descarga eligiendo «Seguidores y seguidos» en formato JSON o HTML y el rango «Todo el tiempo». Instagram te avisará cuando esté lista (minutos u horas).",s3:"Descarga el archivo .zip y súbelo aquí. También acepto los archivos followers_1 y following sueltos, en .json o .html.",why:"¿Por qué así? La API oficial de Instagram no entrega a ninguna app la lista de seguidores/seguidos con login; los sitios que piden tu usuario y contraseña de Instagram son inseguros y pueden costarte la cuenta. La exportación oficial es la vía segura.",drop:"Suelta aquí tu .zip (o los .json/.html)",orclick:"o haz clic para elegir los archivos",pasteT:"¿Prefieres pegar las listas a mano?",pFollowers:"Seguidores (uno por línea)",pFollowing:"Seguidos (uno por línea)",compare:"Comparar",tFollowing:"Siguiendo",tFollowers:"Seguidores",tNoBack:"No te siguen de vuelta",tNoFollow:"No sigues de vuelta",copy:"Copiar lista",download:"Descargar .txt",empty:"Nada por aquí 🎉",foot:"Hecho con 💜 por Tec Girl · Esta herramienta no está afiliada a Instagram ni a Meta.",search:"Buscar usuario…",errFiles:"No encontré datos de seguidores/seguidos en esos archivos. Asegúrate de que sean la exportación oficial (.zip o sus archivos .json/.html).",errNeed:"Necesito las dos listas (seguidores y seguidos) para comparar.",loaded:"Cargado: {f} seguidores · {g} seguidos",warnRange:"Ojo: tu lista de seguidores parece incompleta: solo trae desde {d}. Vuelve a pedir la descarga en Instagram con el rango «Todo el tiempo» para que no falte nadie.",merged:"Unidas por posible cambio de usuario: {p}"},
en:{update:"Update data",cached:"Showing your saved data from {d} — upload a fresh export to update it.",h1:"Who doesn't follow you back?",sub:"Compare your Instagram followers and following and find both differences: who you follow without being followed back, and who follows you without you following back.",priv:"100% private: your files are processed on your device. Nothing is uploaded to any server.",how:"How it works",s1:"In Instagram go to Settings → Accounts Center → Your information and permissions → Download your information.",s2:"Request the download choosing “Followers and following” in JSON or HTML format and the “All time” range. Instagram will notify you when it is ready (minutes or hours).",s3:"Download the .zip file and upload it here. I also accept loose followers_1 and following files, in .json or .html.",why:"Why this way? Instagram's official API does not give any app the follower/following lists via login; sites asking for your Instagram username and password are unsafe and can cost you your account. The official export is the safe route.",drop:"Drop your .zip (or the .json/.html files) here",orclick:"or click to choose the files",pasteT:"Prefer to paste the lists by hand?",pFollowers:"Followers (one per line)",pFollowing:"Following (one per line)",compare:"Compare",tFollowing:"Following",tFollowers:"Followers",tNoBack:"Don't follow you back",tNoFollow:"You don't follow back",copy:"Copy list",download:"Download .txt",empty:"Nothing here 🎉",foot:"Made with 💜 by Tec Girl · This tool is not affiliated with Instagram or Meta.",search:"Search user…",errFiles:"I couldn't find followers/following data in those files. Make sure they are the official export (.zip or its .json/.html files).",errNeed:"I need both lists (followers and following) to compare.",loaded:"Loaded: {f} followers · {g} following",warnRange:"Heads up: your followers list looks incomplete — it only goes back to {d}. Request the download in Instagram with the “All time” range so nobody is missing.",merged:"Joined as a possible username change: {p}"},
fr:{update:"Mettre à jour",cached:"Voici vos données enregistrées du {d} — importez un nouvel export pour les mettre à jour.",h1:"Qui ne vous suit pas en retour ?",sub:"Comparez vos abonnés et abonnements Instagram et découvrez les deux différences : qui vous suivez sans être suivi en retour, et qui vous suit sans que vous le suiviez.",priv:"100 % privé : vos fichiers sont traités sur votre appareil. Rien n'est envoyé à un serveur.",how:"Comment ça marche",s1:"Dans Instagram, allez dans Paramètres → Espace comptes → Vos informations et autorisations → Télécharger vos informations.",s2:"Demandez le téléchargement en choisissant « Abonnés et abonnements » au format JSON ou HTML et la période « Toute la période ». Instagram vous préviendra quand il sera prêt (minutes ou heures).",s3:"Téléchargez le fichier .zip et déposez-le ici. J'accepte aussi les fichiers followers_1 et following séparés, en .json ou .html.",why:"Pourquoi ainsi ? L'API officielle d'Instagram ne fournit à aucune application les listes d'abonnés/abonnements via connexion ; les sites qui demandent votre identifiant et mot de passe Instagram sont dangereux et peuvent vous coûter votre compte. L'export officiel est la voie sûre.",drop:"Déposez votre .zip (ou les .json/.html) ici",orclick:"ou cliquez pour choisir les fichiers",pasteT:"Vous préférez coller les listes à la main ?",pFollowers:"Abonnés (un par ligne)",pFollowing:"Abonnements (un par ligne)",compare:"Comparer",tFollowing:"Abonnements",tFollowers:"Abonnés",tNoBack:"Ne vous suivent pas en retour",tNoFollow:"Vous ne suivez pas en retour",copy:"Copier la liste",download:"Télécharger .txt",empty:"Rien ici 🎉",foot:"Fait avec 💜 par Tec Girl · Cet outil n'est pas affilié à Instagram ni à Meta.",search:"Rechercher…",errFiles:"Je n'ai pas trouvé de données abonnés/abonnements dans ces fichiers. Vérifiez qu'il s'agit de l'export officiel (.zip ou ses fichiers .json/.html).",errNeed:"J'ai besoin des deux listes (abonnés et abonnements) pour comparer.",loaded:"Chargé : {f} abonnés · {g} abonnements",warnRange:"Attention : votre liste d'abonnés semble incomplète — elle ne remonte qu'au {d}. Redemandez le téléchargement sur Instagram avec la période « Toute la période » pour ne manquer personne.",merged:"Réunies pour un possible changement de nom d'utilisateur : {p}"},
de:{update:"Daten aktualisieren",cached:"Deine gespeicherten Daten vom {d} werden angezeigt — lade einen frischen Export hoch, um sie zu aktualisieren.",h1:"Wer folgt dir nicht zurück?",sub:"Vergleiche deine Instagram-Follower und Gefolgten und finde beide Unterschiede: wem du folgst, ohne zurückgefolgt zu werden, und wer dir folgt, ohne dass du zurückfolgst.",priv:"100 % privat: Deine Dateien werden auf deinem Gerät verarbeitet. Nichts wird auf einen Server hochgeladen.",how:"So funktioniert es",s1:"Gehe in Instagram zu Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Deine Informationen herunterladen.",s2:"Fordere den Download an und wähle „Follower und Gefolgte“ im JSON- oder HTML-Format und den Zeitraum „Gesamter Zeitraum“. Instagram benachrichtigt dich, wenn er bereit ist (Minuten oder Stunden).",s3:"Lade die .zip-Datei herunter und lade sie hier hoch. Ich akzeptiere auch einzelne followers_1- und following-Dateien, als .json oder .html.",why:"Warum so? Die offizielle Instagram-API gibt keiner App per Login die Follower-/Gefolgten-Listen; Seiten, die deinen Instagram-Benutzernamen und dein Passwort verlangen, sind unsicher und können dich dein Konto kosten. Der offizielle Export ist der sichere Weg.",drop:"Lege deine .zip (oder die .json/.html) hier ab",orclick:"oder klicke, um Dateien zu wählen",pasteT:"Listen lieber von Hand einfügen?",pFollowers:"Follower (einer pro Zeile)",pFollowing:"Gefolgte (einer pro Zeile)",compare:"Vergleichen",tFollowing:"Gefolgte",tFollowers:"Follower",tNoBack:"Folgen dir nicht zurück",tNoFollow:"Folgst du nicht zurück",copy:"Liste kopieren",download:".txt herunterladen",empty:"Nichts hier 🎉",foot:"Mit 💜 gemacht von Tec Girl · Dieses Tool ist nicht mit Instagram oder Meta verbunden.",search:"Benutzer suchen…",errFiles:"Ich konnte in diesen Dateien keine Follower-/Gefolgten-Daten finden. Stelle sicher, dass es der offizielle Export ist (.zip oder seine .json/.html-Dateien).",errNeed:"Ich brauche beide Listen (Follower und Gefolgte) zum Vergleichen.",loaded:"Geladen: {f} Follower · {g} Gefolgte",warnRange:"Achtung: Deine Follower-Liste scheint unvollständig zu sein — sie geht nur bis zum {d} zurück. Fordere den Download in Instagram mit dem Zeitraum „Gesamter Zeitraum“ an, damit niemand fehlt.",merged:"Wegen möglicher Namensänderung zusammengeführt: {p}"},
zh:{update:"更新数据",cached:"正在显示你 {d} 保存的数据 — 上传新的导出文件即可更新。",h1:"谁没有回关你？",sub:"比较你的 Instagram 粉丝和关注列表，找出两个差集：你关注了但对方没有回关你的人，以及关注了你但你没有回关的人。",priv:"100% 隐私：你的文件在你的设备上处理，不会上传到任何服务器。",how:"使用方法",s1:"在 Instagram 中进入 设置 → 账户中心 → 你的信息和权限 → 下载你的信息。",s2:"申请下载时选择「粉丝和关注」，使用 JSON 或 HTML 格式，时间范围选择「全部时间」。Instagram 会在准备好后通知你（几分钟或几小时）。",s3:"下载 .zip 文件并上传到这里。我也接受单独的 followers_1 和 following 文件，.json 或 .html 格式。",why:"为什么用这种方式？Instagram 官方 API 不会通过登录向任何应用提供粉丝/关注名单；要求你输入 Instagram 用户名和密码的网站不安全，可能导致账号被封。官方导出是安全途径。",drop:"将 .zip（或 .json/.html 文件）拖到这里",orclick:"或点击选择文件",pasteT:"想手动粘贴列表？",pFollowers:"粉丝（每行一个）",pFollowing:"关注（每行一个）",compare:"比较",tFollowing:"关注",tFollowers:"粉丝",tNoBack:"没有回关你",tNoFollow:"你没有回关",copy:"复制列表",download:"下载 .txt",empty:"这里什么都没有 🎉",foot:"由 Tec Girl 用 💜 制作 · 本工具与 Instagram 或 Meta 无关。",search:"搜索用户…",errFiles:"在这些文件中找不到粉丝/关注数据。请确认是官方导出文件（.zip 或其中的 .json/.html）。",errNeed:"需要两个列表（粉丝和关注）才能比较。",loaded:"已加载：{f} 位粉丝 · {g} 个关注",warnRange:"注意：你的粉丝列表似乎不完整——只回溯到{d}。请在 Instagram 申请下载时选择时间范围「全部时间」，以免遗漏任何人。",merged:"因可能更改用户名而合并：{p}"},
pt:{update:"Atualizar dados",cached:"Mostrando seus dados salvos de {d} — envie uma exportação nova para atualizar.",h1:"Quem não te segue de volta?",sub:"Compare seus seguidores e seguidos do Instagram e descubra as duas diferenças: quem você segue sem ser seguido de volta, e quem te segue sem você seguir de volta.",priv:"100% privado: seus arquivos são processados no seu dispositivo. Nada é enviado a nenhum servidor.",how:"Como funciona",s1:"No Instagram, vá em Configurações → Central de Contas → Suas informações e permissões → Baixar suas informações.",s2:"Peça o download escolhendo «Seguidores e seguidos» em formato JSON ou HTML e o período «Todo o período». O Instagram avisará quando estiver pronto (minutos ou horas).",s3:"Baixe o arquivo .zip e envie aqui. Também aceito os arquivos followers_1 e following soltos, em .json ou .html.",why:"Por que assim? A API oficial do Instagram não entrega a nenhuma app as listas de seguidores/seguidos via login; sites que pedem seu usuário e senha do Instagram são inseguros e podem custar sua conta. A exportação oficial é o caminho seguro.",drop:"Solte seu .zip (ou os .json/.html) aqui",orclick:"ou clique para escolher os arquivos",pasteT:"Prefere colar as listas à mão?",pFollowers:"Seguidores (um por linha)",pFollowing:"Seguidos (um por linha)",compare:"Comparar",tFollowing:"Seguindo",tFollowers:"Seguidores",tNoBack:"Não te seguem de volta",tNoFollow:"Você não segue de volta",copy:"Copiar lista",download:"Baixar .txt",empty:"Nada por aqui 🎉",foot:"Feito com 💜 por Tec Girl · Esta ferramenta não é afiliada ao Instagram nem à Meta.",search:"Buscar usuário…",errFiles:"Não encontrei dados de seguidores/seguidos nesses arquivos. Verifique se são a exportação oficial (.zip ou seus arquivos .json/.html).",errNeed:"Preciso das duas listas (seguidores e seguidos) para comparar.",loaded:"Carregado: {f} seguidores · {g} seguindo",warnRange:"Atenção: sua lista de seguidores parece incompleta — só vai até {d}. Peça o download no Instagram com o período «Todo o período» para não faltar ninguém.",merged:"Unidas por possível mudança de nome de usuário: {p}"}
};
const $ = s => document.querySelector(s);
let lang = localStorage.getItem("if-lang") || "es";
let DATA = null;      // {followers:Set, following:Set, names:Map}
let TAB = "following";

function t(k){ return (I18N[lang] && I18N[lang][k]) || k; }
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v = lang==="es" ? null : I18N[lang][el.dataset.i18n];
    if(v) el.textContent = v;
    else if(el.dataset.es) el.textContent = el.dataset.es;
  });
  $("#q").placeholder = t("search");
  document.documentElement.lang = lang;
}
document.querySelectorAll("[data-i18n]").forEach(el=>{ el.dataset.es = el.textContent; });
$("#lang").value = lang;
$("#lang").addEventListener("change", e=>{ lang = e.target.value; localStorage.setItem("if-lang", lang); applyI18n(); if(DATA) render(); });

/* ---------- parsing ---------- */
function usernamesFrom(obj, kind){
  const out = [];
  const collect = entry => {
    const sld = entry && entry.string_list_data;
    if(Array.isArray(sld)) sld.forEach(x=>{ if(x && x.value) out.push(String(x.value)); });
  };
  if(Array.isArray(obj)) obj.forEach(collect);
  else if(obj && Array.isArray(obj["relationships_"+kind])) obj["relationships_"+kind].forEach(collect);
  else if(obj && Array.isArray(obj.relationships_following)) obj.relationships_following.forEach(collect);
  return out;
}
function usernamesFromHtml(text){
  const out = [];
  /* Profile links: https://www.instagram.com/username and https://www.instagram.com/_u/username */
  const re = /href="https?:\/\/(?:www\.)?instagram\.com\/(?:_u\/)?([A-Za-z0-9._]+)\/?(?:[?#][^"]*)?"/g;
  let m;
  while((m = re.exec(text)) !== null){
    const u = m[1];
    if(u && !/^(explore|p|reel|reels|stories|direct|accounts)$/i.test(u)) out.push(u);
  }
  /* Some exports list the username as a heading instead of (or next to) a link */
  const h2 = /<h2[^>]*>([A-Za-z0-9._]{1,30})<\/h2>/g;
  while((m = h2.exec(text)) !== null) out.push(m[1]);
  return out;
}
const MONTHS = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
function datesFromHtml(text){
  const out = [];
  const re = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{4})/g;
  let m;
  while((m = re.exec(text)) !== null) out.push(new Date(+m[3], MONTHS[m[1]], +m[2]).getTime());
  return out;
}
function timestampsFromJson(obj){
  const out = [];
  const walk = entry => {
    const sld = entry && entry.string_list_data;
    if(Array.isArray(sld)) sld.forEach(x=>{ if(x && x.timestamp) out.push(+x.timestamp * 1000); });
  };
  if(Array.isArray(obj)) obj.forEach(walk);
  else if(obj) Object.values(obj).forEach(v=>{ if(Array.isArray(v)) v.forEach(walk); });
  return out;
}
async function readFiles(fileList){
  let followers = [], following = [];
  let minF = null, minG = null;
  const note = (kind, dates) => {
    if(!dates.length) return;
    const m = Math.min(...dates);
    if(kind === "following") minG = (minG === null ? m : Math.min(minG, m));
    else minF = (minF === null ? m : Math.min(minF, m));
  };
  const parseText = (text, base) => {
    if(!base.includes("followers") && !base.includes("following")) return;
    const kind = base.includes("following") ? "following" : "followers";
    let list = [];
    if(base.endsWith(".html")){
      list = usernamesFromHtml(text);
      note(kind, datesFromHtml(text));
    } else {
      let obj; try{ obj = JSON.parse(text); }catch(e){ return; }
      list = usernamesFrom(obj, kind);
      note(kind, timestampsFromJson(obj));
    }
    if(kind === "following") following = following.concat(list);
    else followers = followers.concat(list);
  };
  for(const file of fileList){
    const name = file.name.toLowerCase();
    if(name.endsWith(".zip")){
      const zip = await JSZip.loadAsync(file);
      for(const path of Object.keys(zip.files)){
        const base = path.split("/").pop().toLowerCase();
        if(zip.files[path].dir || !(base.endsWith(".json") || base.endsWith(".html"))) continue;
        parseText(await zip.files[path].async("text"), base);
      }
    } else if(name.endsWith(".json") || name.endsWith(".html")){
      parseText(await file.text(), name);
    }
  }
  return {followers, following, minF, minG};
}
function buildData(followersRaw, followingRaw){
  const clean = u => String(u).trim().replace(/^@/, "");
  const namesF = new Map(), namesG = new Map();
  const F = new Set(), G = new Set();
  followersRaw.forEach(u=>{ const s = clean(u); if(!s) return; const k = s.toLowerCase(); if(!F.has(k)){ F.add(k); namesF.set(k, s); } });
  followingRaw.forEach(u=>{ const s = clean(u); if(!s) return; const k = s.toLowerCase(); if(!G.has(k)){ G.add(k); namesG.set(k, s); } });
  /* Rename candidates: same letters ignoring . and _, exactly ONE spelling
     on each side and the spellings differ (el_atoron_1932 = elatoron1932).
     If either side has two spellings for the same letters, they are two
     different accounts (keysi.kunz and key_si_kunz coexist) and are NOT merged. */
  const squish = u => u.replace(/[._]/g, "");
  const fBySq = new Map(), gBySq = new Map();
  F.forEach(k=>{ const sq = squish(k); if(!fBySq.has(sq)) fBySq.set(sq, new Set()); fBySq.get(sq).add(k); });
  G.forEach(k=>{ const sq = squish(k); if(!gBySq.has(sq)) gBySq.set(sq, new Set()); gBySq.get(sq).add(k); });
  const merged = [];
  const Feff = new Set(F);
  fBySq.forEach((fset, sq)=>{
    const gset = gBySq.get(sq);
    if(gset && fset.size === 1 && gset.size === 1){
      const fk = [...fset][0], gk = [...gset][0];
      if(fk !== gk){ Feff.delete(fk); Feff.add(gk); merged.push(namesG.get(gk) + " = " + namesF.get(fk)); }
    }
  });
  return {followers:F, following:G, effFollowers:Feff, namesF, namesG, merged};
}
function lists(){
  const F = DATA.effFollowers, G = DATA.following;
  const pick = (set, map) => [...set].map(k=>map.get(k) || k).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
  return {
    following: pick(G, DATA.namesG),
    followers: pick(DATA.followers, DATA.namesF),
    noback: pick(new Set([...G].filter(x=>!F.has(x))), DATA.namesG),
    nofollow: pick(new Set([...F].filter(x=>!G.has(x))), DATA.namesF)
  };
}
/* ---------- UI ---------- */
function showError(msg){ $("#error").textContent = msg || ""; }
const CACHE_KEY = "if-cache-v1";
function saveCache(followersRaw, followingRaw, minF, minG){
  try{ localStorage.setItem(CACHE_KEY, JSON.stringify({f:followersRaw, g:followingRaw, ts:Date.now(), minF, minG})); }catch(e){ /* sin espacio: se muestra igual, sin caché */ }
}
function setData(followersRaw, followingRaw, sourceLabel, fromCache, cacheTs, minF, minG){
  if(!followersRaw.length && !followingRaw.length){ showError(t("errFiles")); return; }
  if(!followersRaw.length || !followingRaw.length){ showError(t("errNeed")); return; }
  showError("");
  DATA = buildData(followersRaw, followingRaw);
  const L = lists();
  $("#cFollowing").textContent = L.following.length;
  $("#cFollowers").textContent = L.followers.length;
  $("#cNoBack").textContent = L.noback.length;
  $("#cNoFollow").textContent = L.nofollow.length;
  $("#fileinfo").textContent = t("loaded").replace("{f}", L.followers.length).replace("{g}", L.following.length) + (sourceLabel ? " · " + sourceLabel : "");
  if(!fromCache) saveCache(followersRaw, followingRaw, minF, minG);
  $("#cacheinfo").textContent = fromCache && cacheTs
    ? (lang==="es" ? "Mostrando tus datos guardados del {d} — sube una exportación nueva para actualizarlos." : t("cached")).replace("{d}", new Date(cacheTs).toLocaleString())
    : "";
  /* Warn when the followers list looks cut off by the export's date range:
     its oldest entry is over a year newer than the following list's oldest. */
  const warn = $("#rangewarn");
  if(minF && minG && (minF - minG) > 365*24*3600*1000){
    warn.textContent = t("warnRange").replace("{d}", new Date(minF).toLocaleDateString());
    warn.hidden = false;
  } else warn.hidden = true;
  const mg = $("#mergedinfo");
  if(DATA.merged.length){
    mg.textContent = t("merged").replace("{p}", DATA.merged.join(" · "));
    mg.hidden = false;
  } else mg.hidden = true;
  $("#results").hidden = false;
  render();
}
function render(){
  if(!DATA) return;
  const L = lists()[TAB];
  const q = $("#q").value.trim().toLowerCase();
  const shown = q ? L.filter(u=>u.toLowerCase().includes(q)) : L;
  $("#list").innerHTML = shown.map(u=>`<li><a href="https://www.instagram.com/${encodeURIComponent(u)}/" target="_blank" rel="noopener">@${u}</a></li>`).join("");
  $("#empty").hidden = shown.length > 0;
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click", ()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); TAB = b.dataset.tab; render();
}));
$("#q").addEventListener("input", render);
$("#copyBtn").addEventListener("click", async ()=>{
  if(!DATA) return;
  await navigator.clipboard.writeText(lists()[TAB].join("\n"));
  $("#copyBtn").textContent = "✓"; setTimeout(()=>{ $("#copyBtn").textContent = t("copy"); }, 1200);
});
$("#dlBtn").addEventListener("click", ()=>{
  if(!DATA) return;
  const blob = new Blob([lists()[TAB].join("\n")], {type:"text/plain"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "insta-followers-" + TAB + ".txt"; a.click();
  URL.revokeObjectURL(a.href);
});
const drop = $("#drop"), input = $("#files");
drop.addEventListener("click", ()=>input.click());
drop.addEventListener("dragover", e=>{ e.preventDefault(); drop.classList.add("over"); });
drop.addEventListener("dragleave", ()=>drop.classList.remove("over"));
drop.addEventListener("drop", async e=>{
  e.preventDefault(); drop.classList.remove("over");
  const {followers, following, minF, minG} = await readFiles(e.dataTransfer.files);
  setData(followers, following, "", false, null, minF, minG);
});
input.addEventListener("change", async ()=>{
  const {followers, following, minF, minG} = await readFiles(input.files);
  setData(followers, following, "", false, null, minF, minG);
});
$("#pasteGo").addEventListener("click", ()=>{
  const split = v => v.split(/[\s,;]+/).map(s=>s.trim()).filter(Boolean);
  setData(split($("#pasteFollowers").value), split($("#pasteFollowing").value), "✍️");
});
applyI18n();
$("#clearCache").addEventListener("click", ()=>{
  localStorage.removeItem(CACHE_KEY);
  DATA = null; $("#results").hidden = true; $("#fileinfo").textContent = "";
  $("#files").value = ""; drop.scrollIntoView({behavior:"smooth", block:"center"});
});
let pasteTimer = null;
function autoPaste(){
  const split = v => v.split(/[\s,;]+/).map(s=>s.trim()).filter(Boolean);
  const f = split($("#pasteFollowers").value), g = split($("#pasteFollowing").value);
  if(f.length && g.length) setData(f, g, "✍️");
}
["pasteFollowers","pasteFollowing"].forEach(id=>{
  document.getElementById(id).addEventListener("input", ()=>{ clearTimeout(pasteTimer); pasteTimer = setTimeout(autoPaste, 600); });
});
try{
  const raw = localStorage.getItem(CACHE_KEY);
  if(raw){ const c = JSON.parse(raw); if(c && c.f && c.g && c.f.length && c.g.length) setData(c.f, c.g, "", true, c.ts, c.minF, c.minG); }
}catch(e){ /* caché ilegible: se ignora */ }
