// Local fan prototype. Character sprite source: heelee912/chiikawa-dots-pets.
// Combat stats, special skills and stage layouts below are fan-game inventions.
export const CAST={
 usagi:{name:'우사기',species:'양끝 토벌봉 · 빠른 돌격',hp:100,speed:155,weapon:'staff',color:'#e9cb70'},
 chiikawa:{name:'치이카와',species:'분홍 사스마타 · 넓은 밀어내기',hp:110,speed:145,weapon:'sasumata',color:'#e7a6bc'},
 hachiware:{name:'하치와레',species:'파란 사스마타 · 튼튼한 모험가',hp:125,speed:145,weapon:'sasumata',color:'#9dc6e5'},
 rakko:{name:'랏코',species:'검 · 빠르고 강한 베기',hp:95,speed:160,weapon:'sword',color:'#b7cbdb'},
 momonga:{name:'모몽가',species:'팬게임 바람 지팡이 · 가벼운 발걸음',hp:90,speed:175,weapon:'fan',color:'#c5b7de'},
 shisa:{name:'시사',species:'팬게임 국자 · 든든한 체력',hp:135,speed:140,weapon:'ladle',color:'#dfc78f'},
 kurimanju:{name:'쿠리만주',species:'팬게임 간식 방망이 · 묵직한 한 방',hp:140,speed:135,weapon:'staff',color:'#c5a98e'},
 furuhonya:{name:'후루혼야',species:'팬게임 책 마법 · 넓은 공격',hp:105,speed:150,weapon:'book',color:'#e9a4b4'},
 siren:{name:'세이렌',species:'팬게임 물결창 · 푸른 파동',hp:120,speed:150,weapon:'trident',color:'#a4cee2'},
 anoko:{name:'아노코',species:'팬게임 발톱 · 강한 밀어내기',hp:155,speed:135,weapon:'claw',color:'#b8a3c7'},
 dekatsuyo:{name:'데카츠요',species:'팬게임 큰 발톱 · 묵직한 돌진',hp:165,speed:130,weapon:'claw',color:'#aaa2c5'}
};
export const STAGES=[
 {id:'meadow',name:'풀뽑기 들판',tag:'풀뽑기 · 토벌 모티브',description:'풀잎을 모아 의뢰판 3곳에 전달하고 큰 토벌 대상을 물리치세요.',ground:'#deebbd',path:'#f6eaca',accent:'#ddaaaf'},
 {id:'cave',name:'동굴 앞 피크닉',tag:'동굴 생활 · 친구들의 식사 모티브',description:'동굴 앞 들판에서 재료를 모으고 토벌 의뢰를 완료하세요.',ground:'#c9dec6',path:'#e8dec5',accent:'#a7c6d5'},
 {id:'ramen',name:'라멘 가게 가는 길',tag:'라멘 · 노동 모티브',description:'가게 주변 재료를 모으고 위험한 손님(?)을 쫓아내세요.',ground:'#ead9bf',path:'#f7edd8',accent:'#dcb39a'}
];
export const FAN_SKILLS=[
 {id:'power',name:'토벌 연습',desc:'무기 공격력 +18%',icon:'⚔',color:'#ffd1c0'},
 {id:'rapid',name:'연속 찌르기',desc:'기본 공격 간격 −12%',icon:'»',color:'#a9dccc'},
 {id:'multi',name:'씨앗 날리기',desc:'원거리 씨앗 +1 · 최대 6',icon:'❧',color:'#cde3a5'},
 {id:'orbit',name:'빙글 간식',desc:'주변을 도는 간식 +1 · 최대 6',icon:'◉',color:'#ebce9f'},
 {id:'heal',name:'따끈한 라멘',desc:'체력 35 회복 · 최대 체력 +12',icon:'♨',color:'#ffbbca'},
 {id:'speed',name:'야하! 달리기',desc:'이동 속도 +6.5%',icon:'↟',color:'#c9efb7'},
 {id:'reach',name:'길어진 토벌봉',desc:'근접 공격 범위 +18',icon:'↔',color:'#b8d9ff'},
 {id:'spin',name:'빙글빙글 토벌',desc:'2.8초마다 주변 회전 공격 · 중첩 강화',icon:'↻',color:'#e4c5e7'},
 {id:'shock',name:'찌릿찌릿 토벌봉',desc:'3.8초마다 주변 적에게 충격파',icon:'ϟ',color:'#ffeba2'},
 {id:'picnic',name:'피크닉 도시락',desc:'8초마다 체력 4 회복 · 중첩 강화',icon:'♥',color:'#efbfc4'}
];
