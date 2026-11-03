"use strict";
/* insta-followers — 100% local. Spanish is the DOM language; dictionaries translate the rest. */
const I18N = {
en:{update:"Update data",cached:"Showing your saved data from {d} — upload a fresh export to update it.",h1:"Who doesn't follow you back?",sub:"Compare your Instagram followers and following and find both differences: who you follow without being followed back, and who follows you without you following back.",priv:"100% private: your files are processed on your device. Nothing is uploaded to any server.",how:"How it works",s1:"In Instagram go to Settings → Accounts Center → Your information and permissions → Download your information.",s2:"Request the download choosing “Followers and following” in JSON format. Instagram will notify you when it is ready (minutes or hours).",s3:"Download the .zip file and upload it here. I also accept loose followers_1.json and following.json files.",why:"Why this way? Instagram's official API does not give any app the follower/following lists via login; sites asking for your Instagram username and password are unsafe and can cost you your account. The official export is the safe route.",drop:"Drop your .zip (or the .json files) here",orclick:"or click to choose the files",pasteT:"Prefer to paste the lists by hand?",pFollowers:"Followers (one per line)",pFollowing:"Following (one per line)",compare:"Compare",tFollowing:"Following",tFollowers:"Followers",tNoBack:"Don't follow you back",tNoFollow:"You don't follow back",copy:"Copy list",download:"Download .txt",empty:"Nothing here 🎉",foot:"Made with 💜 by Tec Girl · This tool is not affiliated with Instagram or Meta.",search:"Search user…",errFiles:"I couldn't find followers/following data in those files. Make sure they are the official export (.zip or its .json files).",errNeed:"I need both lists (followers and following) to compare.",loaded:"Loaded: {f} followers · {g} following"},
fr:{update:"Mettre à jour",cached:"Voici vos données enregistrées du {d} — importez un nouvel export pour les mettre à jour.",h1:"Qui ne vous suit pas en retour ?",sub:"Comparez vos abonnés et abonnements Instagram et découvrez les deux différences : qui vous suivez sans être suivi en retour, et qui vous suit sans que vous le suiviez.",priv:"100 % privé : vos fichiers sont traités sur votre appareil. Rien n'est envoyé à un serveur.",how:"Comment ça marche",s1:"Dans Instagram, allez dans Paramètres → Espace comptes → Vos informations et autorisations → Télécharger vos informations.",s2:"Demandez le téléchargement en choisissant « Abonnés et abonnements » au format JSON. Instagram vous préviendra quand il sera prêt (minutes ou heures).",s3:"Téléchargez le fichier .zip et déposez-le ici. J'accepte aussi les fichiers followers_1.json et following.json séparés.",why:"Pourquoi ainsi ? L'API officielle d'Instagram ne fournit à aucune application les listes d'abonnés/abonnements via connexion ; les sites qui demandent votre identifiant et mot de passe Instagram sont dangereux et peuvent vous coûter votre compte. L'export officiel est la voie sûre.",drop:"Déposez votre .zip (ou les .json) ici",orclick:"ou cliquez pour choisir les fichiers",pasteT:"Vous préférez coller les listes à la main ?",pFollowers:"Abonnés (un par ligne)",pFollowing:"Abonnements (un par ligne)",compare:"Comparer",tFollowing:"Abonnements",tFollowers:"Abonnés",tNoBack:"Ne vous suivent pas en retour",tNoFollow:"Vous ne suivez pas en retour",copy:"Copier la liste",download:"Télécharger .txt",empty:"Rien ici 🎉",foot:"Fait avec 💜 par Tec Girl · Cet outil n'est pas affilié à Instagram ni à Meta.",search:"Rechercher…",errFiles:"Je n'ai pas trouvé de données abonnés/abonnements dans ces fichiers. Vérifiez qu'il s'agit de l'export officiel (.zip ou ses .json).",errNeed:"J'ai besoin des deux listes (abonnés et abonnements) pour comparer.",loaded:"Chargé : {f} abonnés · {g} abonnements"},
de:{update:"Daten aktualisieren",cached:"Deine gespeicherten Daten vom {d} werden angezeigt — lade einen frischen Export hoch, um sie zu aktualisieren.",h1:"Wer folgt dir nicht zurück?",sub:"Vergleiche deine Instagram-Follower und Gefolgten und finde beide Unterschiede: wem du folgst, ohne zurückgefolgt zu werden, und wer dir folgt, ohne dass du zurückfolgst.",priv:"100 % privat: Deine Dateien werden auf deinem Gerät verarbeitet. Nichts wird auf einen Server hochgeladen.",how:"So funktioniert es",s1:"Gehe in Instagram zu Einstellungen → Kontenübersicht → Deine Informationen und Berechtigungen → Deine Informationen herunterladen.",s2:"Fordere den Download an und wähle „Follower und Gefolgte“ im JSON-Format. Instagram benachrichtigt dich, wenn er bereit ist (Minuten oder Stunden).",s3:"Lade die .zip-Datei herunter und lade sie hier hoch. Ich akzeptiere auch einzelne followers_1.json- und following.json-Dateien.",why:"Warum so? Die offizielle Instagram-API gibt keiner App per Login die Follower-/Gefolgten-Listen; Seiten, die deinen Instagram-Benutzernamen und dein Passwort verlangen, sind unsicher und können dich dein Konto kosten. Der offizielle Export ist der sichere Weg.",drop:"Lege deine .zip (oder die .json) hier ab",orclick:"oder klicke, um Dateien zu wählen",pasteT:"Listen lieber von Hand einfügen?",pFollowers:"Follower (einer pro Zeile)",pFollowing:"Gefolgte (einer pro Zeile)",compare:"Vergleichen",tFollowing:"Gefolgte",tFollowers:"Follower",tNoBack:"Folgen dir nicht zurück",tNoFollow:"Folgst du nicht zurück",copy:"Liste kopieren",download:".txt herunterladen",empty:"Nichts hier 🎉",foot:"Mit 💜 gemacht von Tec Girl · Dieses Tool ist nicht mit Instagram oder Meta verbunden.",search:"Benutzer suchen…",errFiles:"Ich konnte in diesen Dateien keine Follower-/Gefolgten-Daten finden. Stelle sicher, dass es der offizielle Export ist (.zip oder seine .json-Dateien).",errNeed:"Ich brauche beide Listen (Follower und Gefolgte) zum Vergleichen.",loaded:"Geladen: {f} Follower · {g} Gefolgte"},
zh:{update:"更新数据",cached:"正在显示你 {d} 保存的数据 — 上传新的导出文件即可更新。",h1:"谁没有回关你？",sub:"比较你的 Instagram 粉丝和关注列表，找出两个差集：你关注了但对方没有回关你的人，以及关注了你但你没有回关的人。",priv:"100% 隐私：你的文件在你的设备上处理，不会上传到任何服务器。",how:"使用方法",s1:"在 Instagram 中进入 设置 → 账户中心 → 你的信息和权限 → 下载你的信息。",s2:"申请下载时选择「粉丝和关注」并使用 JSON 格式。Instagram 会在准备好后通知你（几分钟或几小时）。",s3:"下载 .zip 文件并上传到这里。我也接受单独的 followers_1.json 和 following.json 文件。",why:"为什么用这种方式？Instagram 官方 API 不会通过登录向任何应用提供粉丝/关注名单；要求你输入 Instagram 用户名和密码的网站不安全，可能导致账号被封。官方导出是安全途径。",drop:"将 .zip（或 .json 文件）拖到这里",orclick:"或点击选择文件",pasteT:"想手动粘贴列表？",pFollowers:"粉丝（每行一个）",pFollowing:"关注（每行一个）",compare:"比较",tFollowing:"关注",tFollowers:"粉丝",tNoBack:"没有回关你",tNoFollow:"你没有回关",copy:"复制列表",download:"下载 .txt",empty:"这里什么都没有 🎉",foot:"由 Tec Girl 用 💜 制作 · 本工具与 Instagram 或 Meta 无关。",search:"搜索用户…",errFiles:"在这些文件中找不到粉丝/关注数据。请确认是官方导出文件（.zip 或其中的 .json）。",errNeed:"需要两个列表（粉丝和关注）才能比较。",loaded:"已加载：{f} 位粉丝 · {g} 个关注"},
pt:{update:"Atualizar dados",cached:"Mostrando seus dados salvos de {d} — envie uma exportação nova para atualizar.",h1:"Quem não te segue de volta?",sub:"Compare seus seguidores e seguidos do Instagram e descubra as duas diferenças: quem você segue sem ser seguido de volta, e quem te segue sem você seguir de volta.",priv:"100% privado: seus arquivos são processados no seu dispositivo. Nada é enviado a nenhum servidor.",how:"Como funciona",s1:"No Instagram, vá em Configurações → Central de Contas → Suas informações e permissões → Baixar suas informações.",s2:"Peça o download escolhendo «Seguidores e seguidos» em formato JSON. O Instagram avisará quando estiver pronto (minutos ou horas).",s3:"Baixe o arquivo .zip e envie aqui. Também aceito os arquivos followers_1.json e following.json soltos.",why:"Por que assim? A API oficial do Instagram não entrega a nenhuma app as listas de seguidores/seguidos via login; sites que pedem seu usuário e senha do Instagram são inseguros e podem custar sua conta. A exportação oficial é o caminho seguro.",drop:"Solte seu .zip (ou os .json) aqui",orclick:"ou clique para escolher os arquivos",pasteT:"Prefere colar as listas à mão?",pFollowers:"Seguidores (um por linha)",pFollowing:"Seguidos (um por linha)",compare:"Comparar",tFollowing:"Seguindo",tFollowers:"Seguidores",tNoBack:"Não te seguem de volta",tNoFollow:"Você não segue de volta",copy:"Copiar lista",download:"Baixar .txt",empty:"Nada por aqui 🎉",foot:"Feito com 💜 por Tec Girl · Esta ferramenta não é afiliada ao Instagram nem à Meta.",search:"Buscar usuário…",errFiles:"Não encontrei dados de seguidores/seguidos nesses arquivos. Verifique se são a exportação oficial (.zip ou seus .json).",errNeed:"Preciso das duas listas (seguidores e seguidos) para comparar.",loaded:"Carregado: {f} seguidores · {g} seguindo"}
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
async function readFiles(fileList){
  let followers = [], following = [];
  for(const file of fileList){
    const name = file.name.toLowerCase();
    if(name.endsWith(".zip")){
      const zip = await JSZip.loadAsync(file);
      for(const path of Object.keys(zip.files)){
        const base = path.split("/").pop().toLowerCase();
        if(zip.files[path].dir || !base.endsWith(".json")) continue;
        const text = await zip.files[path].async("text");
        let obj; try{ obj = JSON.parse(text); }catch(e){ continue; }
        if(base.includes("following")) following = following.concat(usernamesFrom(obj,"following"));
        else if(base.includes("followers")) followers = followers.concat(usernamesFrom(obj,"followers"));
      }
    } else if(name.endsWith(".json")){
      let obj; try{ obj = JSON.parse(await file.text()); }catch(e){ continue; }
      if(name.includes("following")) following = following.concat(usernamesFrom(obj,"following"));
      else if(name.includes("followers")) followers = followers.concat(usernamesFrom(obj,"followers"));
    }
  }
  return {followers, following};
}
function buildData(followersRaw, followingRaw){
  const names = new Map();
  const norm = u => { const s = String(u).trim().replace(/^@/,""); if(s && !names.has(s.toLowerCase())) names.set(s.toLowerCase(), s); return s.toLowerCase(); };
  const F = new Set(followersRaw.map(norm).filter(Boolean));
  const G = new Set(followingRaw.map(norm).filter(Boolean));
  return {followers:F, following:G, names};
}
function lists(){
  const F = DATA.followers, G = DATA.following;
  const pick = set => [...set].map(k=>DATA.names.get(k)).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
  return {
    following: pick(G),
    followers: pick(F),
    noback: pick(new Set([...G].filter(x=>!F.has(x)))),
    nofollow: pick(new Set([...F].filter(x=>!G.has(x))))
  };
}
/* ---------- UI ---------- */
function showError(msg){ $("#error").textContent = msg || ""; }
const CACHE_KEY = "if-cache-v1";
function saveCache(followersRaw, followingRaw){
  try{ localStorage.setItem(CACHE_KEY, JSON.stringify({f:followersRaw, g:followingRaw, ts:Date.now()})); }catch(e){ /* sin espacio: se muestra igual, sin caché */ }
}
function setData(followersRaw, followingRaw, sourceLabel, fromCache, cacheTs){
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
  if(!fromCache) saveCache(followersRaw, followingRaw);
  $("#cacheinfo").textContent = fromCache && cacheTs
    ? (lang==="es" ? "Mostrando tus datos guardados del {d} — sube una exportación nueva para actualizarlos." : t("cached")).replace("{d}", new Date(cacheTs).toLocaleString())
    : "";
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
  const {followers, following} = await readFiles(e.dataTransfer.files);
  setData(followers, following);
});
input.addEventListener("change", async ()=>{
  const {followers, following} = await readFiles(input.files);
  setData(followers, following);
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
  if(raw){ const c = JSON.parse(raw); if(c && c.f && c.g && c.f.length && c.g.length) setData(c.f, c.g, "", true, c.ts); }
}catch(e){ /* caché ilegible: se ignora */ }
