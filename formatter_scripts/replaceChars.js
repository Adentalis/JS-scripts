console.log("Heyy\n");

var fs = require("fs");
//var text = fs.readFileSync("formatter_scripts/homework.txt");
var text =
  "Zgktvgkr Wn Vioyzotsr Rozzot Yit soytkqyxkt gz eknhygukqhin iql q exkogxl iolygkn. Ltekten, gz egxklt, iql qsvqnl hsqntr q etfykqs kgst, wxy xfyos yit Zokly Vgksr Vqk, odhgkyqfy rtctsghdtfyl qhhtqktr of hkofy of q dgkt gk stll yodtsn zqliogf qfr yit zotsr dgctr zgkvqkr of dxei yit lqdt vqn ql gyitk lhteoqsomtr roleohsoftl. Ql sqyt ql 1918, gft gz yit dgly ofzsxtfyoqs eknhyqfqsnyoe hqhtkl gz yit 20yi etfyxkn, Vossoqd Z. Zkotrdqf'l dgfgukqhi Yit Ofrtb gz Egofeortfet qfr oyl Qhhsoeqyogfl of Eknhygukqhin, qhhtqktr ql q ktltqkei kthgky gz yit hkocqyt Koctkwqfa Sqwgkqygkotl. Qfr yiol, rtlhoyt yit zqey yiqy yit vgka iqr wttf rgft ql hqky gz yit vqk tzzgky. Of yit lqdt ntqk Trvqkr I. Itwtkf gz Gqasqfr, Eqsozgkfoq zostr yit zokly hqytfy zgk q kgygk dqeioft, yit rtcoet rtlyoftr yg wt q dqoflyqn gz dosoyqkn eknhygukqhin zgk ftqksn zozyn ntqkl. Qzytk yit Zokly Vgksr Vqk, igvtctk, yioful wtuqf yg eiqfut. X.L. Qkdn qfr Fqcn gkuqfomqyogfl, vgkaofu tfyoktsn of ltekty, wtuqf yg dqat zxfrqdtfyqs qrcqfetl of eknhygukqhin. Rxkofu yit yiokyotl qfr zgkyotl q ztv wqloe hqhtkl ror qhhtqk of yit ghtf soytkqyxkt qfr ltctkqs yktqyoltl gf yit lxwptey vtkt hxwsolitr, wxy yit sqyytk vtkt zqkyitk qfr zqkyitk wtiofr yit lyqyt gz yit qky. Wn yit tfr gz yit vqk yit ykqfloyogf vql egdhstyt. Voyi gft fgyqwst tbethyogf, yit hxwsoe soytkqyxkt iqr rotr. Yiqy tbethyogf vql Esqxrt Liqffgf'l hqhtk Yit Egddxfoeqyogf Yitgkn gz Ltekten Lnlytdl, vioei qhhtqktr of yit Wtss Lnlytd Yteifoeqs Pgxkfqs of 1949. Oy vql lodosqk yg Zkotrdqf'l 1918 hqhtk, of yiqy oy uktv gxy gz vqkyodt vgka gz Liqffgf'l. Qzytk yit Ltegfr Vgksr Vqk tfrtr oy vql rtesqllozotr, hgllowsn wn dolyqat. Zkgd 1949 xfyos 1967 yit eknhygukqhioe soytkqyxkt vql wqkktf. Of yiqy ntqk q rozztktfy lgky gz egfykowxyogf qhhtqktr: Rqcor Aqif'l iolygkn, Yit Egrtwktqatkl. Oy rorf'y egfyqof qfn ftv yteifoeqs ortql, wxy oy ror egfyqof q ktdqkaqwsn egdhstyt iolygkn gz viqy iqr ugft wtzgkt, ofesxrofu dtfyogf gz lgdt yioful yiqy yit ugctkfdtfy lyoss egflortktr ltekty. Yit loufozoeqfet gz Yit Egrtwktqatkl sqn fgy pxly of oyl ktdqkaqwst leght, wxy qslg of yit zqey yiqy oy tfpgntr uggr lqstl qfr dqrt ytfl gz yigxlqfrl gz htghst, vig iqr ftctk uoctf yit dqyytk q dgdtfy'l yigxuiy, qvqkt gz eknhygukqhin. Q ykoeast gz ftv eknhygukqhioe hqhtkl wtuqf yg wt vkoyytf. Qy qwgxy yit lqdt yodt, Igkly Ztolyts, vig iqr tqksotk vgkatr gf ortfyozoeqyogf zkotfr gk zgt rtcoetl zgk yit Qok Zgket, ygga iol soztsgfu hqllogf zgk eknhygukqhin yg yit OWD Vqylgf Sqwgkqygkn of Ngkaygvf Itouiyl, Ftv Ngka. Yitkt, it wtuof rtctsghdtfy gz viqy vql yg wtegdt yit X.L. Rqyq Tfeknhyogf Lyqfrqkr qfr wn yit tqksn 1970l ltctkqs yteifoeqs kthgkyl gf yiol lxwptey wn Ztolyts qfr iol egsstquxtl iqr wttf dqrt hxwsoe wn OWD.";

//text = text.slice(0, 100);
console.log(text);

//text = realReplace(text, "q", "a");
text = realReplace(text, "q", "a");
text = realReplace(text, "Q", "A");

//next hint --> As layt as 1918

console.log("\n" + text);

//swap these two chars with each other
function realReplace(text, replaceThis, replaceBy) {
  var split = text.split("");
  //console.log(replaceThis + " -- " + replaceBy);
  for (var i = 0; i <= split.length; i++) {
    if (split[i] === replaceThis) {
      split[i] = replaceBy;
      continue;
    }

    if (split[i] === replaceBy) split[i] = replaceThis;
  }

  return split.join("");
}
