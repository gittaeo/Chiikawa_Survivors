// Fan-game balance and abilities. These are not official Chiikawa techniques.
export const RUN_LENGTH=15*60;
export const RANK_CAPS={weapon:8,power:6,rapid:6,multi:6,orbit:6,heal:6,speed:6,reach:6,spin:6,shock:6,picnic:6,unique:5};
export const TRAITS={
 usagi:{name:'야하! 번개질주',desc:'8초간 공격 가속 + 주변 번개 폭발',synergy:'충격파 피해 +25% · 고유기 중 기본 공격 가속.',cooldown:24,color:'#ecd079'},
 chiikawa:{name:'작지만 용감한 방패',desc:'체력 회복 + 10초간 보호막',synergy:'라멘 강화가 보호막과 회복량을 늘려요.',cooldown:26,color:'#ecafc4'},
 hachiware:{name:'어떻게든 된다!',desc:'12초간 친구 분신이 함께 공격',synergy:'씨앗 개수가 늘면 분신의 발사 수도 늘어요.',cooldown:26,color:'#9dcce5'},
 rakko:{name:'토벌 선생의 일섬',desc:'넓은 범위 3연속 베기 + 8초간 치명타',synergy:'공격력 강화가 일섬과 치명타를 강화해요.',cooldown:23,color:'#c8ddec'},
 momonga:{name:'나를 봐! 회오리',desc:'10초간 가속 + 반복하는 바람 공격',synergy:'달리기 강화가 회오리 범위도 늘려요.',cooldown:24,color:'#cdb6e3'},
 shisa:{name:'따끈한 라멘 한 그릇',desc:'즉시 회복 + 10초간 회복·열기 장판',synergy:'도시락 강화가 열기 피해와 회복을 늘려요.',cooldown:28,color:'#eccb92'},
 kurimanju:{name:'든든한 한잔',desc:'12초간 공격력 두 배 · 받는 피해 감소',synergy:'무기 범위 강화가 밀어내기와 타격을 늘려요.',cooldown:28,color:'#c6ab8c'},
 furuhonya:{name:'이야기책의 폭풍',desc:'현재 위치에 12초간 책 마법진 설치',synergy:'회전 간식 강화가 마법진의 공격 속도를 높여요.',cooldown:25,color:'#dfa2ba'},
 siren:{name:'넘실넘실 큰 파도',desc:'넓은 파도 공격 + 8초간 적 감속',synergy:'충격파 강화가 파도의 피해와 범위를 늘려요.',cooldown:24,color:'#a8dae9'},
 anoko:{name:'배고픈 사냥',desc:'주변을 할퀴고 회복 · 8초간 흡혈 공격',synergy:'토벌 연습 강화가 흡혈 효율도 늘려요.',cooldown:25,color:'#bea6c9'},
 dekatsuyo:{name:'엄청 커졌다!',desc:'12초간 거대화 · 접촉 충격파 · 피해 감소',synergy:'회전 공격 강화가 거대화 충격파를 강화해요.',cooldown:30,color:'#b9a7cd'}
};
export const RECIPES=[
 {id:'weapon',name:'궁극 토벌 무기',a:'weapon',aRank:8,b:'power',bRank:3,desc:'기본 무기 위력·범위 증가, 타격마다 빛의 파동',icon:'⚔'},
 {id:'seeds',name:'유성 씨앗 폭풍',a:'multi',aRank:6,b:'rapid',bRank:3,desc:'씨앗 수 2배 · 관통 3회 · 유성 탄환',icon:'❧'},
 {id:'sanctuary',name:'무한 간식 결계',a:'orbit',aRank:6,b:'picnic',bRank:3,desc:'커진 회전 결계 · 피해 감소 · 지속 회복',icon:'◉'},
 {id:'tempest',name:'끝없는 회오리',a:'spin',aRank:6,b:'speed',bRank:3,desc:'회전 공격 간격 절반 · 범위 대폭 증가',icon:'↻'},
 {id:'thunder',name:'하늘을 가르는 번개',a:'shock',aRank:6,b:'reach',bRank:3,desc:'광역 번개 충격파 · 적 감속',icon:'ϟ'},
 {id:'awakening',name:'캐릭터 고유 각성',a:'unique',aRank:5,b:'weapon',bRank:6,desc:'고유 능력 위력·지속 시간 증가 · 재사용 단축',icon:'✧'}
];
export const EXTRA_SKILLS=[{id:'weapon',name:'기본 무기 강화',desc:'기본 피해 +18% · 범위 +4',icon:'⚔',color:'#f3d7ad'},{id:'unique',name:'고유 능력 강화',desc:'고유 능력 위력 증가 · 재사용 단축',icon:'✧',color:'#d6bbed'}];
export const LABELS={weapon:'기본 무기',power:'토벌 연습',rapid:'연속 찌르기',multi:'씨앗 날리기',orbit:'빙글 간식',heal:'따끈한 라멘',speed:'달리기',reach:'무기 범위',spin:'회전 토벌',shock:'충격파',picnic:'도시락',unique:'고유 능력'};
export function phaseAt(seconds){return seconds<180?'들판 탐색':seconds<360?'몰려오는 무리':seconds<540?'정예 토벌':seconds<720?'한계 돌파':'최종 공세';}
export function eligibleEvolutions(ranks,evolved=[]){return RECIPES.filter(r=>!evolved.includes(r.id)&&(ranks[r.a]||0)>=r.aRank&&(ranks[r.b]||0)>=r.bRank);}
