const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.get('/test', (req, res) => {
	let messages = 'This is test of gsbot Goorm IDE Server.';
	res.status(200).json({
		result: messages,
	});
});

app.get('/boss/:diff/:name', (req, res) => {
	let { diff, name } = req.params;
	let success = false;
	let content = "";

	const diffList = ['이지', '노멀', '노말', '하드', '카오스', '익스트림', '익스'];
	if (diffList.includes(diff)) {
		success = true;
		switch (name) {
			case '가디언엔젤슬라임':
			case '가엔슬':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<가디언 엔젤 슬라임(노멀) 정보>\n\n입장 가능 레벨: 215\n\n- 단일 페이즈\n몬스터 레벨: 220\n체력: 5조\n방어율: 300%\n\n\n';
						content = content + '<가디언 엔젤 슬라임(노멀) 주요 보상>\n\n결정석 가격: 46,935,874메소\n\n수상한 에디셔널 큐브: 3개\n[여명] 가디언 엔젤 링';
						break;
					case '하드':
					case '카오스':
						content = '<가디언 엔젤 슬라임(카오스) 정보>\n\n입장 가능 레벨: 215\n\n- 단일 페이즈\n몬스터 레벨: 250\n체력: 115.5조\n방어율: 300%\n\n\n';
						content = content + '<가디언 엔젤 슬라임(카오스) 주요 보상>\n\n결정석 가격: 155,492,142메소\n\n수상한 에디셔널 큐브: 9개\n솔 에르다의 기운: 70\n[여명] 가디언 엔젤 링';
						break;
				}
				break;

			case '자쿰':
				switch (diff) {
					case '이지':
						content = '<자쿰(이지) 정보>\n\n입장 가능 레벨: 50\n\n- 단일 페이즈\n몬스터 레벨: 50\n본체 체력: 220만\n팔 1개 체력: 20.4만\n방어율: 30%\n\n\n';
						content = content + '<자쿰(이지) 주요 보상>\n\n결정석 가격: 119,835메소\n\n자쿰의 투구';
						break;
					case '노말':
					case '노멀':
						content = '<자쿰(노멀) 정보>\n\n입장 가능 레벨: 90\n\n- 단일 페이즈\n몬스터 레벨: 110\n본체 체력: 745만\n팔 1개 체력: 70만\n방어율: 40%\n\n\n';
						content = content + '<자쿰(노멀) 주요 보상>\n\n결정석 가격: 366,907메소\n\n수상한 큐브: 1개\n\n자쿰의 포이즈닉 장비\n자쿰의 투구\n\n[보장] 응축된 힘의 결정석\n[보장] 아쿠아틱 레터 눈장식';
						break;
					case '하드':
					case '카오스':
						content = '<자쿰(카오스) 정보>\n\n입장 가능 레벨: 90\n\n- 단일 페이즈\n몬스터 레벨: 180\n본체 체력: 840억\n팔 1개 체력: 105억\n방어율: 100%\n\n\n';
						content = content + '<자쿰(카오스) 주요 보상>\n\n결정석 가격: 9,741,285메소\n\n수상한 큐브: 12개\n\n자쿰의 포이즈닉 장비\n자쿰의 투구\n\n[보장(벨트)] 분노한 자쿰의 장비\n[보장] 응축된 힘의 결정석\n[보장] 아쿠아틱 레터 눈장식';
						break;
				}
				break;

			case '혼테일':
			case '혼텔':
				switch (diff) {
					case '이지':
						content = '<혼테일(이지) 정보>\n\n입장 가능 레벨: 130\n\n- 단일 페이즈\n몬스터 레벨: 130\n본체 체력: 8.176억\n오른쪽 머리 체력: 1억\n왼쪽 머리 체력: 1억\n방어율: 40%\n\n\n';
						content = content + '<혼테일(이지) 주요 보상>\n\n결정석 가격: 528,474메소\n\n수상한 큐브: 1개\n\n혼테일의 목걸이\n\n[보장] 데아 시두스 이어링\n[보장] 실버블라썸 링';
						break;
					case '노말':
					case '노멀':
						content = '<혼테일(노멀) 정보>\n\n입장 가능 레벨: 130\n\n- 단일 페이즈\n몬스터 레벨: 160\n본체 체력: 20.9억\n오른쪽 머리 체력: 3.3억\n왼쪽 머리 체력: 3.3억\n방어율: 40%\n\n\n';
						content = content + '<혼테일(노멀) 주요 보상>\n\n결정석 가격: 606,666메소\n\n수상한 큐브: 2개\n\n혼테일의 목걸이\n\n[보장] 데아 시두스 이어링\n[보장] 실버블라썸 링';
						break;
					case '하드':
					case '카오스':
						content = '<혼테일(카오스) 정보>\n\n입장 가능 레벨: 135\n\n- 단일 페이즈\n몬스터 레벨: 130\n본체 체력: 200억\n오른쪽 머리 체력: 33억\n왼쪽 머리 체력: 33억\n방어율: 50%\n\n\n';
						content = content + '<혼테일(카오스) 주요 보상>\n\n결정석 가격: 810,086메소\n\n수상한 큐브: 2개\n\n[보장] 데아 시두스 이어링\n[보장] 실버블라썸 링\n[보장] 카오스 혼테일의 목걸이';
						break;
				}
				break;

			case '파풀라투스':
			case '파풀':
				switch (diff) {
					case '이지':
						content = '<파풀라투스(이지) 정보>\n\n입장 가능 레벨: 115\n\n- 공통\n몬스터 레벨: 125\n방어율: 50%\n\n- 페이즈 1\n체력: 3억\n\n- 페이즈 2\n체력: 1억\n\n\n';
						content = content + '<파풀라투스(이지) 주요 보상>\n\n결정석 가격: 410,135메소\n\n수상한 큐브: 1개';
						break;
					case '노말':
					case '노멀':
						content = '<파풀라투스(노멀) 정보>\n\n입장 가능 레벨: 155\n\n- 공통\n몬스터 레벨: 155\n방어율: 90%\n\n- 페이즈 1\n체력: 140억\n\n- 페이즈 2\n체력: 60억\n\n\n';
						content = content + '<파풀라투스(노멀) 주요 보상>\n\n결정석 가격: 1,596,506메소\n\n수상한 큐브: 3개\n파풀라투스의 시계 의자';
						break;
					case '하드':
					case '카오스':
						content = '<파풀라투스(카오스) 정보>\n\n입장 가능 레벨: 190\n\n- 공통\n몬스터 레벨: 190\n방어율: 250%\n\n- 페이즈 1\n체력: 3780억\n\n- 페이즈 2\n체력: 1260억\n\n\n';
						content = content + '<파풀라투스(카오스) 주요 보상>\n\n결정석 가격: 26,725,937메소\n\n수상한 큐브: 15개\n파풀라투스 마크\n\n파풀라투스의 시계 의자';
						break;
				}
				break;

			case '반레온':
				switch (diff) {
					case '이지':
						content = '<사자왕 반 레온(이지) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 120\n체력: 7억\n방어율: 50%\n\n\n';
						content = content + '<사자왕 반 레온(이지) 주요 보상>\n\n결정석 가격: 633,927메소\n\n수상한 큐브: 2개\n\n사자왕의 로얄 메달';
						break;
					case '노말':
					case '노멀':
						content = '<사자왕 반 레온(노멀) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 130\n체력: 63억\n방어율: 80%\n\n\n';
						content = content + '<사자왕 반 레온(노말) 주요 보상>\n\n결정석 가격: 873,601메소\n\n수상한 큐브: 3개\n\n사자왕의 로얄 메달';
						break;
					case '하드':
					case '카오스':
						content = '<사자왕 반 레온(하드) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 140\n체력: 105억\n방어율: 80%\n\n\n';
						content = content + '<사자왕 반 레온(하드) 주요 보상>\n\n결정석 가격: 1,467,984메소\n\n수상한 큐브: 3개\n\n로얄 반 레온 장비\n\n[보장(재료)]이피아의 장신구';
						break;
				}
				break;

			case '시그너스':
			case '시그':
				switch (diff) {
					case '이지':
						content = '<타락한 시그너스(이지) 정보>\n\n입장 가능 레벨: 140\n\n- 단일 페이즈\n몬스터 레벨: 140\n체력: 105억\n방어율: 100%\n\n\n';
						content = content + '<타락한 시그너스(이지) 주요 보상>\n\n결정석 가격: 5,493,394메소\n\n수상한 큐브: 8개\n[여제] 검은 수호의 조각\n[여제] 검은 파괴의 조각';
						break;
					case '노말':
					case '노멀':
						content = '<타락한 시그너스(노멀) 정보>\n\n입장 가능 레벨: 165\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 630억\n방어율: 100%\n\n\n';
						content = content + '<타락한 시그너스(노멀) 주요 보상>\n\n결정석 가격: 9,039,130메소\n\n수상한 큐브: 10개\n[여제] 검은 수호의 조각\n[여제] 검은 파괴의 조각';
						break;
				}
				break;

			case '핑크빈':
			case '핑빈':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<핑크빈(노멀) 정보>\n\n입장 가능 레벨: 160\n\n- 단일 페이즈\n몬스터 레벨: 180\n체력(석상 포함): 76.5억\n방어율: 70%\n\n\n';
						content = content + '<핑크빈(노멀) 주요 보상>\n\n결정석 가격: 841,544메소\n\n수상한 큐브: 2개\n\n[보장] 핑크빛 성배\n[보장] 골든 클로버 벨트\n[보장] 블랙빈 마크';
						break;
					case '하드':
					case '카오스':
						content = '<핑크빈(카오스) 정보>\n\n입장 가능 레벨: 170\n\n- 단일 페이즈(통합)\n몬스터 레벨: 190\n체력(석상 포함): 2037억\n방어율: 100%\n\n\n';
						content = content + '<핑크빈(카오스) 주요 보상>\n\n결정석 가격: 7,923,110메소\n\n수상한 큐브: 9개\n블랙빈, 카오스 핑크빈 세트\n\n[보장] 핑크빛 성배\n[보장] 골든 클로버 벨트\n[보장] 블랙빈 마크';
						break;
				}
				break;

			case '블러디퀸':
			case '블퀸':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<블러디 퀸(노멀) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 120\n체력: 3.15억\n방어율: 50%\n\n\n';
						content = content + '<블러디 퀸(노멀) 주요 보상>\n\n결정석 가격: 580,003메소\n\n수상한 큐브: 1개\n\n퀸의 티아라\n무서워요 퀸 의자';
						break;
					case '하드':
					case '카오스':
						content = '<블러디 퀸(카오스) 정보>\n\n입장 가능 레벨: 180\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 1400억\n방어율: 120%\n\n\n';
						content = content + '<블러디 퀸(카오스) 주요 보상>\n\n결정석 가격: 9,806,780메소\n\n수상한 큐브: 13개\n\n[럭키아이템] 카오스 퀸의 티아라\n무서워요 퀸 의자\n\n[카루타(재료)] 절규의 조각';
						break;
				}
				break;

			case '반반':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<반반(노멀) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 120\n체력: 3.15억\n방어율: 50%\n\n\n';
						content = content + '<반반(노멀) 주요 보상>\n\n결정석 가격: 580,003메소\n\n수상한 큐브: 1개\n\n반반 투구\n반반과 함께 의자';
						break;
					case '하드':
					case '카오스':
						content = '<반반(카오스) 정보>\n\n입장 가능 레벨: 180\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 1000억\n방어율: 100%\n\n\n';
						content = content + '<반반(카오스) 주요 보상>\n\n결정석 가격: 9,818,154메소\n\n수상한 큐브: 13개\n\n[럭키아이템] 카오스 반반 투구\n반반과 함께 의자\n\n[카루타(재료)] 시간의 조각';
						break;
				}
				break;

			case '피에르':
			case '삐에르':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<피에르(노멀) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 120\n체력: 3.15억\n방어율: 50%\n\n\n';
						content = content + '<피에르(노멀) 주요 보상>\n\n결정석 가격: 580,003메소\n\n수상한 큐브: 1개\n\n피에르 모자\n즐거운 피에르 의자';
						break;
					case '하드':
					case '카오스':
						content = '<피에르(카오스) 정보>\n\n입장 가능 레벨: 180\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 800억\n방어율: 80%\n\n\n';
						content = content + '<반반(카오스) 주요 보상>\n\n결정석 가격: 9,838,932메소\n\n수상한 큐브: 13개\n\n[럭키아이템] 카오스 피에르 모자\n즐거운 피에르 의자\n\n[카루타(재료)] 절규의 조각';
						break;
				}
				break;

			case '벨룸':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<벨룸(노멀) 정보>\n\n입장 가능 레벨: 125\n\n- 단일 페이즈\n몬스터 레벨: 120\n체력: 5.5억\n방어율: 55%\n\n\n';
						content = content + '<벨룸(노멀) 주요 보상>\n\n결정석 가격: 580,003메소\n\n수상한 큐브: 1개\n\n벨룸의 헬름\n기암괴석 의자';
						break;
					case '하드':
					case '카오스':
						content = '<벨룸(카오스) 정보>\n\n입장 가능 레벨: 180\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 2000억\n방어율: 200%\n\n\n';
						content = content + '<벨룸(카오스) 주요 보상>\n\n결정석 가격: 12,590,202메소\n\n수상한 큐브: 15개\n\n[럭키아이템] 카오스 벨룸의 헬름\n기암괴석 의자\n\n[보장(재료)] 파멸의 조각';
						break;
				}
				break;

			case '힐라':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<힐라(노멀) 정보>\n\n입장 가능 레벨: 120\n\n- 단일 페이즈\n몬스터 레벨: 110\n체력: 5억\n방어율: 50%\n\n\n';
						content = content + '<힐라(노멀) 주요 보상>\n\n결정석 가격: 479,343메소\n\n수상한 큐브: 1개\n\n네크로 장비\n[펫 상자] 다크 소울\n\n[보장] 영생의 돌';
						break;
					case '하드':
					case '카오스':
						content = '<힐라(하드) 정보>\n\n입장 가능 레벨: 170\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 168억\n방어율: 100%\n\n\n';
						content = content + '<힐라(하드) 주요 보상>\n\n결정석 가격: 6,936,489메소\n\n수상한 큐브: 9개\n\n네크로 장비\n[펫 상자] 다크 소울\n\n[보장] 지옥의 불꽃\n[보장] 영생의 돌';
						break;
				}
				break;

			case '아카이럼':
			case '아카':
				switch (diff) {
					case '이지':
						content = '<아카이럼(이지) 정보>\n\n입장 가능 레벨: 140\n\n- 단일 페이즈\n몬스터 레벨: 130\n체력: 21억\n방어율: 60%\n\n\n';
						content = content + '<아카이럼(이지) 주요 보상>\n\n결정석 가격: 690,249메소\n\n수상한 큐브: 2개\n\n[보장] 매커네이터 펜던트\n태초의 정수';
						break;
					case '노말':
					case '노멀':
						content = '<아카이럼(노멀) 정보>\n\n입장 가능 레벨: 140\n\n- 단일 페이즈\n몬스터 레벨: 170\n체력: 126억\n방어율: 90%\n\n\n';
						content = content + '<아카이럼(노멀) 주요 보상>\n\n결정석 가격: 1,510,227메소\n\n수상한 큐브: 3개\n\n[보장] 도미네이터 펜던트\n[보장] 매커네이터 펜던트\n태초의 정수';
						break;
				}
				break;

			case '매그너스':
			case '매그':
				switch (diff) {
					case '이지':
						content = '<매그너스(이지) 정보>\n\n입장 가능 레벨: 115\n\n- 단일 페이즈\n몬스터 레벨: 110\n체력: 4억\n방어율: 50%\n\n\n';
						content = content + '<매그너스(이지) 주요 보상>\n\n결정석 가격: 432,605메소\n\n수상한 큐브: 1개\n\n그림자 상인단 코인\n헬리시움 장비\n노바 장비\n\n[보장] 로얄 블랙메탈 숄더\n[보장] 크리스탈 웬투스 뱃지';
						break;
					case '노말':
					case '노멀':
						content = '<매그너스(노멀) 정보>\n\n입장 가능 레벨: 155\n\n- 단일 페이즈\n몬스터 레벨: 130\n체력: 60억\n방어율: 50%\n\n\n';
						content = content + '<매그너스(노멀) 주요 보상>\n\n결정석 가격: 1,553,066메소\n\n수상한 큐브: 3개\n\n그림자 상인단 코인\n헬리시움 장비\n노바 장비\n\n[보장] 로얄 블랙메탈 숄더\n[보장] 크리스탈 웬투스 뱃지';
						break;
					case '하드':
					case '카오스':
						content = '<매그너스(하드) 정보>\n\n입장 가능 레벨: 175\n\n- 단일 페이즈\n몬스터 레벨: 190\n체력: 1200억\n방어율: 120%\n\n\n';
						content = content + '<매그너스(하드) 주요 보상>\n\n결정석 가격: 11,579,023메소\n\n수상한 큐브: 14개\n\n매그너스 코인\n타일런트 망토\n저주받은 카이세리움\n\n[보장] 로얄 블랙메탈 숄더\n[보장] 크리스탈 웬투스 뱃지';
						break;
				}
				break;

			case '스우':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<스우(노멀) 정보>\n\n입장 가능 레벨: 190\n\n- 공통\n몬스터 레벨: 210\n방어율: 300%\n\n- 페이즈 1\n체력: 4,000억\n\n- 페이즈 2\n체력: 4,000억\n\n- 페이즈 3\n체력: 7,000억\n\n\n';
						content = content + '<스우(노멀) 주요 보상>\n\n결정석 가격: 33,942,566메소\n\n수상한 에디셔널 큐브: 3개\n특수형 에너지 코어(S급): 1~3개\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<스우(하드) 정보>\n\n입장 가능 레벨: 190\n\n- 공통\n몬스터 레벨: 210\n방어율: 300%\n\n- 페이즈 1\n체력: 1.7조\n\n- 페이즈 2\n체력: 7조\n\n- 페이즈 3\n체력: 24조\n\n\n';
						content = content + '<스우(하드) 주요 보상>\n\n결정석 가격: 118,294,192메소\n\n수상한 에디셔널 큐브: 8개\n특수형 에너지 코어(S급): 2~4개\n스우로이드\n솔 에르다의 기운: 50\n\n[앱솔] 앱솔랩스 장비 상자\n[칠흑] 루즈 컨트롤 머신 마크\n[칠흑] 손상된 블랙 하트\n홍옥의 보스 반지 상자 (중급)';
						break;
				}
				break;

			case '데미안':
			case '데먄':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<데미안(노멀) 정보>\n\n입장 가능 레벨: 190\n\n- 공통\n몬스터 레벨: 210\n방어율: 300%\n\n- 페이즈 1\n체력: 8,400억\n\n- 페이즈 2\n체력: 3,600억\n\n\n';
						content = content + '<데미안(노멀) 주요 보상>\n\n결정석 가격: 35,517,853메소\n\n수상한 에디셔널 큐브: 3개\n뒤틀린 낙인의 영혼석: 1~3개\n루인 포스실드\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<데미안(하드) 정보>\n\n입장 가능 레벨: 190\n\n- 공통\n몬스터 레벨: 210\n방어율: 300%\n\n- 페이즈 1\n체력: 25.2조\n\n- 페이즈 2\n체력: 10.8조\n\n\n';
						content = content + '<데미안(하드) 주요 보상>\n\n결정석 가격: 112,480,613메소\n\n수상한 에디셔널 큐브: 7개\n뒤틀린 낙인의 영혼석: 2~4개\n데미안로이드\n루인 포스실드\n솔 에르다의 기운: 50\n\n[앱솔] 앱솔랩스 장비 상자\n[칠흑]마력이 깃든 안대\n홍옥의 보스 반지 상자 (중급)';
						break;
				}
				break;

			case '루시드':
			case '루시':
				switch (diff) {
					case '이지':
						content = '<루시드(이지) 정보>\n\n입장 가능 레벨: 220\n\n- 공통\n몬스터 레벨: 230\n아케인 포스: 360\n방어율: 300%\n\n- 페이즈 1\n체력: 6조\n\n- 페이즈 2\n체력: 6조\n\n\n';
						content = content + '<루시드(이지) 주요 보상>\n\n결정석 가격: 48,058,319메소\n\n수상한 에디셔널 큐브: 3개\n\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '노말':
					case '노멀':
						content = '<루시드(노멀) 정보>\n\n입장 가능 레벨: 220\n\n- 공통\n몬스터 레벨: 230\n아케인 포스: 360\n방어율: 300%\n\n- 페이즈 1\n체력: 12조\n\n- 페이즈 2\n체력: 12조\n\n\n';
						content = content + '<루시드(노멀) 주요 보상>\n\n결정석 가격: 57,502,626메소\n\n수상한 에디셔널 큐브: 4개\n\n[아케인(재료)] 나비날개 물방울석: 1~2개\n[여명]트와일라이트 마크\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<루시드(하드) 정보>\n\n입장 가능 레벨: 220\n\n- 공통\n몬스터 레벨: 230\n아케인 포스: 360\n방어율: 300%\n\n- 페이즈 1\n체력: 41.04조\n\n- 페이즈 2\n체력: 41.04조\n\n- 페이즈 3\n체력: 11.97조 + 회복\n\n\n';
						content = content + '<루시드(하드) 주요 보상>\n\n결정석 가격: 131,095,655메소\n\n수상한 에디셔널 큐브: 9개\n루시드로이드\n솔 에르다의 기운: 50\n\n[아케인(재료)] 나비날개 물방울석: 2~3개\n[아케인] 아케인셰이드 장비 상자\n[여명] 트와일라이트 마크\n[칠흑] 몽환의 벨트\n홍옥의 보스 반지 상자 (중급)';
						break;
				}
				break;

			case '윌':
				switch (diff) {
					case '이지':
						content = '<윌(이지) 정보>\n\n입장 가능 레벨: 235\n\n- 공통\n몬스터 레벨: 235\n아케인 포스: 560\n방어율: 300%\n\n- 페이즈 1\n체력: 5.4조\n\n- 페이즈 2\n체력: 4.16조\n\n- 페이즈 3\n체력: 6.94조\n\n\n';
						content = content + '<윌(이지) 주요 보상>\n\n결정석 가격: 52,139,127메소\n\n수상한 에디셔널 큐브: 4개\n\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '노말':
					case '노멀':
						content = '<윌(노멀) 정보>\n\n입장 가능 레벨: 235\n\n- 공통\n몬스터 레벨: 250\n아케인 포스: 760\n방어율: 300%\n\n- 페이즈 1\n체력: 8.4조\n\n- 페이즈 2\n체력: 6.3조\n\n- 페이즈 3\n체력: 10.5조\n\n\n';
						content = content + '<윌(노멀) 주요 보상>\n\n결정석 가격: 66,311,463메소\n\n수상한 에디셔널 큐브: 5개\n\n[아케인(재료)] 코브웹 물방울석: 1~2개\n[여명] 트와일라이트 마크\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<윌(하드) 정보>\n\n입장 가능 레벨: 235\n\n- 공통\n몬스터 레벨: 250\n아케인 포스: 760\n방어율: 300%\n\n- 페이즈 1\n체력: 42조\n\n- 페이즈 2\n체력: 31.5조\n\n- 페이즈 3\n체력: 52.5조\n\n\n';
						content = content + '<윌(하드) 주요 보상>\n\n결정석 가격: 145,038,483메소\n\n수상한 에디셔널 큐브: 9개\n거울 세계의 코어 젬스톤: 1개\n솔 에르다의 기운: 50\n\n[아케인(재료)] 코브웹 물방울석: 2~3개\n[아케인] 아케인셰이드 장비 상자\n[여명] 트와일라이트 마크\n[칠흑] 저주받은 마도서 교환권\n홍옥의 보스 반지 상자 (중급)';
						break;
				}
				break;

			case '더스크':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<거대 괴수 더스크(노멀) 정보>\n\n입장 가능 레벨: 245\n\n- 단일 페이즈\n몬스터 레벨: 255\n아케인 포스: 730\n방어율: 300%\n체력: 26조\n\n\n';
						content = content + '<거대 괴수 더스크(노멀) 주요 보상>\n\n결정석 가격: 71,054,562메소\n\n수상한 에디셔널 큐브: 6개\n염원의 불꽃: 14개\n\n[여명] 에스텔라 이어링\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<거대 괴수 더스크(카오스) 정보>\n\n입장 가능 레벨: 245\n\n- 단일 페이즈\n몬스터 레벨: 255\n아케인 포스: 730\n방어율: 300%\n체력: 114.6조\n\n\n';
						content = content + '<거대 괴수 더스크(카오스) 주요 보상>\n\n결정석 가격: 160,173,752메소\n\n수상한 에디셔널 큐브: 10개\n염원의 불꽃: 14개\n솔 에르다의 기운: 100\n\n[아케인] 아케인셰이드 장비 상자\n[여명] 에스텔라 이어링\n[칠흑] 거대한 공포\n흑옥의 보스 반지 상자 (상급)';
						break;
				}
				break;

			case '듄켈':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<친위대장 듄켈(노멀) 정보>\n\n입장 가능 레벨: 255\n\n- 단일 페이즈\n몬스터 레벨: 265\n아케인 포스: 850\n방어율: 300%\n체력: 26조\n\n\n';
						content = content + '<친위대장 듄켈(노멀) 주요 보상>\n\n결정석 가격: 76,601,412메소\n\n수상한 에디셔널 큐브: 6개\n염원의 불꽃: 16개\n\n[여명] 에스텔라 이어링\n녹옥의 보스 반지 상자 (하급)';
						break;
					case '하드':
					case '카오스':
						content = '<친위대장 듄켈(하드) 정보>\n\n입장 가능 레벨: 255\n\n- 단일 페이즈\n몬스터 레벨: 265\n아케인 포스: 850\n방어율: 300%\n체력: 155조\n\n\n';
						content = content + '<친위대장 듄켈(하드) 주요 보상>\n\n결정석 가격: 168,609,280메소\n\n수상한 에디셔널 큐브: 10개\n염원의 불꽃: 14개\n솔 에르다의 기운: 120\n\n[아케인] 아케인셰이드 장비 상자\n[여명]에스텔라 이어링\n[칠흑]커맨더 포스 이어링\n흑옥의 보스 반지 상자 (상급)';
						break;
				}
				break;

			case '선택받은세렌':
			case '세렌':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<선택받은 세렌(노멀) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n몬스터 레벨: 275\n방어율: 380%\n\n- 페이즈 1\n어센틱 포스: 150\n체력: 63조\n\n- 페이즈 2\n어센틱 포스: 200\n체력: 180조\n\n\n';
						content = content + '<선택받은 세렌(노멀) 주요 보상>\n\n결정석 가격: 196,904,752메소\n\n수상한 에디셔널 큐브: 10개\n솔 에르다의 기운: 150\n\n[여명] 데이브레이크 펜던트\n흑옥의 보스 반지 상자 (상급)';
						break;
					case '하드':
					case '카오스':
						content = '<선택받은 세렌(하드) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n몬스터 레벨: 275\n방어율: 380%\n\n- 페이즈 1\n어센틱 포스: 150\n체력: 126조\n\n- 페이즈 2\n어센틱 포스: 200\n체력: 360조\n\n\n';
						content = content + '<선택받은 세렌(하드) 주요 보상>\n\n결정석 가격: 267,825,621메소\n\n수상한 에디셔널 큐브: 11개\n미트라의 코어 젬스톤: 1개\n솔 에르다의 기운: 220\n\n[여명] 데이브레이크 펜던트\n[칠흑] 미트라의 분노 상자\n백옥의 보스 반지 상자 (최상급)';
						break;
					case '익스트림':
					case '익스':
						content = '<선택받은 세렌(익스트림) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n방어율: 380%\n\n- 페이즈 1\n몬스터 레벨: 275\n어센틱 포스: 150\n체력: 1,489조\n\n- 페이즈 2\n몬스터 레벨: 280\n어센틱 포스: 200\n체력: 5,800조\n\n\n';
						content = content + '<선택받은 세렌(익스트림) 주요 보상>\n\n결정석 가격: 1,071,303,484메소\n\n수상한 에디셔널 큐브: ?개\n미트라의 코어 젬스톤: 1개\n솔 에르다의 기운: 560\n\n[여명] 데이브레이크 펜던트\n[칠흑] 미트라의 분노\n[익셉셔널] 그라비티 모듈\n백옥의 보스 반지 상자 (최상급)';
						break;
				}
				break;

			case '진힐라':
			case '지닐라':
				switch (diff) {
					case '노말':
					case '노멀':
						content = '<진 힐라(노멀) 정보>\n\n입장 가능 레벨: 250\n\n- 공통\n몬스터 레벨: 250\n아케인 포스: 900\n방어율: 300%\n\n- 페이즈 1\n체력: 22조\n\n- 페이즈 2\n체력: 22조\n\n- 페이즈 3\n체력: 22조\n\n- 페이즈 4\n체력: 22조\n\n\n';
						content = content + '<진 힐라(노멀) 주요 보상>\n\n결정석 가격: 148,112,376메소\n\n수상한 에디셔널 큐브: 9개\n솔 에르다의 기운: 70\n\n[아케인] 아케인셰이드 장비 상자\n[여명] 데이브레이크 펜던트\n홍옥의 보스 반지 상자 (중급)';
						break;
					case '하드':
					case '카오스':
						content = '<진 힐라(하드) 정보>\n\n입장 가능 레벨: 250\n\n- 공통\n몬스터 레벨: 250\n아케인 포스: 900\n방어율: 300%\n\n- 페이즈 1\n체력: 44조\n\n- 페이즈 2\n체력: 44조\n\n- 페이즈 3\n체력: 44조\n\n- 페이즈 4\n체력: 44조\n\n\n';
						content = content + '<진 힐라(하드) 주요 보상>\n\n결정석 가격: 190,159,452메소\n\n수상한 에디셔널 큐브: 10개\n어두운 힘의 기운: 3개\n솔 에르다의 기운: 120\n\n[아케인] 아케인셰이드 장비 상자\n[여명] 데이브레이크 펜던트\n[칠흑] 고통의 근원\n흑옥의 보스 반지 상자 (상급)';
						break;
				}
				break;

			case '검은마법사':
			case '검마':
				switch (diff) {
					case '하드':
					case '카오스':
						content = '<검은 마법사(하드) 정보>\n\n입장 가능 레벨: 255\n\n- 공통\n아케인 포스: 1320\n방어율: 300%\n\n- 페이즈 1\n몬스터 레벨: 265\n체력: 63조\n방어막: 7,500억\n\n- 페이즈 2\n몬스터 레벨: 275\n체력: 115.5조\n방어막: 2.2조\n\n- 페이즈 3\n몬스터 레벨: 275\n체력: 157.5조\n방어막: 3.5조\n\n- 페이즈 4\n몬스터 레벨: 275\n체력: 140조\n방어막: 3조\n\n\n';
						content = content + '<검은 마법사(하드) 주요 보상>\n\n결정석 가격: 1,418,809,857메소\n\n수상한 에디셔널 큐브: 30개\n솔 에르다의 기운: 300\n\n제네시스 무기(1회)\n[아케인] 아케인셰이드 장비 상자\n[칠흑] 창세의 뱃지\n백옥의 보스 반지 상자 (최상급)';
						break;
					case '익스트림':
					case '익스':
						content = '<검은 마법사(익스트림) 정보>\n\n입장 가능 레벨: 255\n\n- 공통\n아케인 포스: 1320\n방어율: 300%\n\n- 페이즈 1\n몬스터 레벨: 275\n체력: 1,260조\n방어막: 정보 없음\n\n- 페이즈 2\n몬스터 레벨: 280\n체력: 1,470조\n방어막: 정보 없음\n\n- 페이즈 3\n몬스터 레벨: 280\n체력: 1,575조\n방어막: 정보 없음\n\n- 페이즈 4\n몬스터 레벨: 280\n체력: 1,680조\n방어막: 정보 없음\n\n\n';
						content = content + '<검은 마법사(익스트림) 주요 보상>\n\n결정석 가격: 5,675,239,428메소\n\n수상한 에디셔널 큐브: ???\n솔 에르다의 기운: 600\n\n[아케인] 아케인셰이드 장비 상자\n[칠흑] 창세의 뱃지\n[익셉셔널] 악몽의 조각\n백옥의 보스 반지 상자 (최상급)';
						break;
				}
				break;

			case '칼로스':
				switch (diff) {
					case '이지':
						content = '<감시자 칼로스(이지) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n- 몬스터 레벨: 270\n- 어센틱 포스: 200\n\n- 페이즈 1\n방어율: 330%\n체력: 94조 5000억\n\n- 페이즈 2\n방어율: 380%\n체력: 262조 4000억\n\n\n';
						content = content + '<감시자 칼로스(이지) 주요 보상>\n\n결정석 가격: 230,000,000메소\n\n수상한 에디셔널 큐브: 11개\n솔 에르다의 기운: 200\n\n[에테르넬] 남겨진 칼로스의 의지 조각: 1개\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '노말':
					case '노멀':
						content = '<감시자 칼로스(노멀) 정보>\n\n입장 가능 레벨: 265\n\n- 페이즈 1\n몬스터 레벨: 275\n어센틱 포스: 250\n방어율: 330%\n체력: 336조\n\n- 페이즈 2\n몬스터 레벨: 280\n어센틱 포스: 300\n방어율: 380%\n체력: 720조\n\n\n';
						content = content + '<감시자 칼로스(카오스) 주요 보상>\n\n결정석 가격: 300,000,000메소\n\n수상한 에디셔널 큐브: 11개\n솔 에르다의 기운: 250\n\n[에테르넬] 남겨진 칼로스의 의지\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '하드':
					case '카오스':
						content = '<감시자 칼로스(카오스) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n- 몬스터 레벨: 285\n- 어센틱 포스: 330\n- 방어율: 380%\n\n- 페이즈 1\n체력: 1,200조\n\n- 페이즈 2\n체력: 4,800조\n\n\n';
						content = content + '<감시자 칼로스(카오스) 주요 보상>\n\n결정석 가격: 600,000,000메소\n\n수상한 에디셔널 큐브: 11개\n솔 에르다의 기운: 400\n\n[에테르넬] 남겨진 칼로스의 의지: 2개\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '익스트림':
					case '익스':
						content = '<감시자 칼로스(익스트림) 정보>\n\n입장 가능 레벨: 265\n\n- 공통\n- 몬스터 레벨: 285\n- 어센틱 포스: 440\n- 방어율: 380%\n\n- 페이즈 1\n체력: 6,720조\n\n- 페이즈 2\n체력: 2경 4,000조\n\n\n';
						content = content + '<감시자 칼로스(카오스) 주요 보상>\n\n결정석 가격: 1,200,000,000메소\n\n결정석 가격 이외 정보 없음(클리어 기록 없음)';
						break;
				}
				break;

			case '카링':
				switch (diff) {
					case '이지':
						content = '<카링(이지) 정보>\n\n입장 가능 레벨: 275\n\n- 공통\n- 몬스터 레벨: 275\n- 어센틱 포스: 230\n- 방어율: 380%\n\n- 페이즈 1\n체력: 궁기, 도올, 혼돈 각 96조\n\n- 페이즈 2\n체력: 105조\n\n- 페이즈 3\n체력: 궁기, 도올, 혼돈, 카링 각 132조\n\n\n';
						content = content + '<카링(이지) 주요 보상>\n\n결정석 가격: 250,000,000메소\n\n수상한 에디셔널 큐브: 11개\n카링로이드\n솔 에르다의 기운: 200\n\n[에테르넬] 뒤엉킨 흉수의 고리 조각: 1개\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '노말':
					case '노멀':
						content = '<카링(노멀) 정보>\n\n입장 가능 레벨: 275\n\n- 공통\n- 몬스터 레벨: 285\n- 어센틱 포스: 330\n- 방어율: 380%\n\n- 페이즈 1\n체력: 궁기, 도올, 혼돈 각 400조\n\n- 페이즈 2\n체력: 500조\n\n- 페이즈 3\n체력: 궁기, 도올, 혼돈, 카링 각 500조\n\n\n';
						content = content + '<카링(노멀) 주요 보상>\n\n결정석 가격: 350,000,000메소\n\n수상한 에디셔널 큐브: 11개\n카링로이드\n솔 에르다의 기운: 300\n\n[에테르넬] 뒤엉킨 흉수의 고리: 1개\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '하드':
					case '카오스':
						content = '<카링(하드) 정보>\n\n입장 가능 레벨: 275\n\n- 공통\n- 몬스터 레벨: 285\n- 어센틱 포스: 350\n- 방어율: 380%\n\n- 페이즈 1\n체력: 궁기, 도올, 혼돈 각 1,400조\n\n- 페이즈 2\n체력: 정보 없음\n\n- 페이즈 3\n체력: 정보 없음\n\n\n';
						content = content + '<카링(하드) 주요 보상>\n\n결정석 가격: 700,000,000메소\n\n수상한 에디셔널 큐브: 11개\n카링로이드\n솔 에르다의 기운: 500\n\n[에테르넬] 뒤엉킨 흉수의 고리: 2개\n백옥의 보스 반지 상자 (최상급)\n생명의 연마석';
						break;
					case '익스트림':
					case '익스':
						content = '<카링(익스트림) 정보>\n\n입장 가능 레벨: 275\n\n- 공통\n- 몬스터 레벨: 285\n- 어센틱 포스: 480\n- 방어율: 380%\n\n- 페이즈 1\n체력: 궁기, 도올, 혼돈 각 9,500조\n\n- 페이즈 2\n체력: 정보 없음\n\n- 페이즈 3\n체력: 정보 없음\n\n\n';
						content = content + '<카링(익스트림) 주요 보상>\n\n결정석 가격: 1,400,000,000메소\n\n결정석 가격 이외 정보 없음(클리어 기록 없음)';
						break;
				}
				break;

			default:
				success = false;
				content = name + '\n보스명을 잘못 입력하셨습니다. 보스 명령어는 아래의 규칙에 따라 작성하셔야 합니다.\n\n<보스 명령어 사용 방법>\n"/보스(ㅄ or ㅂㅅ) [난이도] [보스명]"\n\n[난이도]: 카오스 / 하드 / 노말 / 노멀 / 이지 / 익스트림 / 익스\n[보스명]: 띄어쓰기를 포함하지 않은 보스명(ex. 가디언 엔젤 슬라임 -> 가디언엔젤슬라임 or 가엔슬)';

				break;
		}
	} else {
		content = '난이도를 잘못 입력하셨습니다. 보스 명령어는 아래의 규칙에 따라 작성하셔야 합니다.\n\n<보스 명령어 사용 방법>\n"/보스(ㅄ or ㅂㅅ) [난이도] [보스명]"\n[난이도]: 카오스 / 하드 / 노말 / 노멀 / 이지 / 익스트림 / 익스\n[보스명]: 띄어쓰기를 포함하지 않은 보스명(ex. 가디언 엔젤 슬라임 -> 가디언엔젤슬라임 or 가엔슬)';
	}
	let successM = '명령어 실행 결과: ';
	if(success) {
		successM = `${successM}성공`;
	} else {
		successM = `${successM}실패`;
	}

	res.status(200).json({
		result: encodeURIComponent(`${successM}\n\n${content}`),
	});
});

app.get('/superial/:start/:goal/:isStarCatch', (req, res) => {
	let start = Number(req.params.start);
	let goal = Number(req.params.goal);
	let isStarCatch = Number(req.params.isStarCatch);
	
	let success = false;
	let successM = "명령어 실행 결과: ";
	let content = "";

	// 스타캐치 없는 시뮬레이션 확률
	const proTSuccess = [50, 50, 45, 40, 40, 40, 40, 40, 40, 37, 35, 35, 3, 2];
	const proTBreak = [0, 0, 0, 0, 0, 1.8, 3, 4.2, 6, 9.5, 13, 16.3, 48.5, 49];
	// 스타캐치 있는 시뮬레이션 확률
	const proTSuccessSC = [
		52.5,
		52.5,
		47.25,
		42,
		42,
		42,
		42,
		42,
		42,
		38.85,
		36.75,
		36.75,
		3.15,
		2.1,
	];
	const proTBreakSC = [0, 0, 0, 0, 0, 1.74, 2.9, 4.06, 5.8, 9.22, 12.65, 15.86, 48.43, 48.95];

	// 각 parameter 값이 정해진 범위에 맞는지 검사 - 맞다면 강화 진행, 틀리면 오류 메시지 전송
	if (start >= 0 && start <= 15 && goal >= 0 && goal <= 15 && (isStarCatch == 0 || isStarCatch == 1)) {

		// 시뮬레이션 진행을 위한 초기 변수 설정
		let curLev = start;
		let totalCost = 0;
		let curCost = 55832200;
		let sCount = 0;
		let fCount = 0;
		let bCount = 0;
		let cCount = 0;
		let curSuccess, curBreak;
		let failStack = 0;

		// 결과 전달을 위한 string 변수 선언
		let isStarCatchS;

		// 스타캐치 적용 여부에 대한 string 결정
		if (isStarCatch == 1) {
			isStarCatchS = '적용';
		} else isStarCatchS = '미적용';

		// 시작 또는 목표 강화단계가 14를 초과한다면, 과부하 방지 메시지 전송
		if (start >= 14 || goal == 15) {
			success = false;
			content = "타일런트 시뮬레이션은 서버 과부하 방지를 위해 14성까지만 가능합니다.\n\n다시 시도해 주세요.";
		} else if (start >= goal) {
			success = false;
			content = "타일런트 시뮬레이션의 목표 강화 수치는 시작 강화 수치보다 항상 높아야 합니다.\n\n다시 시도해 주세요.";
		} else {
			success = true;
			// ************ 강화 시뮬레이션 시작 ************
			while (curLev < goal) {
				// 스타캐치가 적용된다면, 스타캐치가 적용된 확률로 설정
				if (isStarCatch) {
					curSuccess = proTSuccessSC[curLev] / 100;
					curBreak = proTBreakSC[curLev] / 100;
				} else {
					curSuccess = proTSuccess[curLev] / 100;
					curBreak = proTBreak[curLev] / 100;
				}
				// 연속 2회 실패한다면, 찬스타임으로 성공확률 100%
				if (failStack == 2) {
					curSuccess = 1;
					cCount++;
				}
				// 랜덤값이 성공확률수치보다 낮다면 성공 후 성공횟수 1 증가
				if (Math.random() <= curSuccess) {
					curLev++;
					sCount++;
					failStack = 0;
				}
				// 랜덤값이 성공확률수치보다 높다면 실패 또는 파괴 여부 결정
				else {
					// 랜덤값이 파괴확률수치보다 낮다면 레벨은 0, 파괴횟수 1 증가
					if (Math.random() <= curBreak) {
						curLev = 0;
						bCount++;
					}
					// 랜덤값이 파괴확률수치보다 높다면 레벨은 1 감소, 레벨이 0이라면 감소하지 않음, 실패횟수 1 증가, 연속실패횟수 1 증가
					else {
						curLev--;
						if (curLev < 0) {
							curLev = 0;
						}
						fCount++;
						failStack++;
					}
				}
				// 강화 시도 시 마다 정해진 비용을 총 비용에 추가
				totalCost = totalCost + curCost;
			}
			// ************ 강화 시뮬레이션 종료 ************
			//const totalCostLocale = Number(totalCost).toLocaleString("ko");    // 총 비용을 한국식 숫자 표기에 맞게 변경
			const totalCostLocaleT = AddComma(totalCost);

			// 전송할 message 변수에 각각의 강화 결과 추가
			content = '<타일런트 시뮬레이션 완료>\n';
			content = content + start + '성부터 ' + goal + '성까지 진행\n';
			content = content + '스타캐치 적용 여부: ' + isStarCatchS + '\n\n';
			content = content + '성공 횟수: ' + sCount + '회\n';
			content = content + '실패 횟수: ' + fCount + '회\n';
			content = content + '찬스 타임: ' + cCount + '회\n';
			content = content + '파괴 횟수: ' + bCount + '회\n\n';
			content = content + '총 강화 비용: ' + totalCostLocaleT + '메소';
		}
	}
	// 각 parameter 값 중 하나라도 정상 범위로 입력되지 않은 경우, 오류 메시지 전송
	else {
		success = false;
		content =
			"명령어를 잘못 입력하셨습니다. 타일런트시뮬 명령어는 아래의 규칙에 따라 작성하셔야 합니다.\n\n<타일런트시뮬 명령어 사용 방법>\n\"/타일런트시뮬 [n성부터] [m성까지] [스타캐치]\"\n\n[n성부터]: 1 ~ 14 사이의 숫자\n[m성까지]: 1 ~ 14 사이의 숫자\n[스타캐치]: 스타캐치 적용 - 1 / 스타캐치 미적용 - 0\n\n타일런트 시뮬레이션은 서버 과부하 방지를 위해 14성까지만 가능합니다.";
	}
	
	if(success) {
		successM = `${successM}성공`;
	} else {
		successM = `${successM}실패`;
	}
	
	res.status(200).json({
		result: encodeURIComponent(`${successM}\n\n${content}`)
	});
});

app.get('/starForce/:level/:start/:goal/:isStarCatch/:event/:unBreak', (req, res) => {
	let itemLev = Number(req.params.level);
	let startForce = Number(req.params.start);
	let goalForce = Number(req.params.goal);
	let isStarCatch = Number(req.params.isStarCatch);
	let isEvent = Number(req.params.event);
	let isBreakShield = Number(req.params.unBreak);

	let success = false;
	let successM = '명령어 실행 결과: ';
	let content = '';
	
    // 스타캐치 없는 시뮬레이션 확률
    const proNSuccess = [95, 90, 85, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30,  30,  30,  30,  30,  30, 30, 30,    3,    2];
    const proNBreak   = [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 2.1, 2.1, 2.1, 2.8, 2.8,  7,  7, 19.4, 29.4];
    // 스타캐치 있는 시뮬레이션 확률
    const proNSuccessSC = [99.75, 94.5, 89.25, 89.25, 84, 78.75, 73.5, 68.25, 63, 57.75, 52.5, 47.25, 42, 36.75, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 31.5, 3.15,  2.1];
    const proNBreakSC   = [    0,    0,     0,     0,  0,     0,    0,     0,  0,     0,    0,     0,  0,     0,    0,  2.1,  2.1,  2.1,  2.8,  2.8,    7,    7, 19.4, 29.4];

	if (
		((itemLev >= 0 && itemLev <= 200) || itemLev == 250) &&
		startForce >= 0 && startForce <= 25 &&
		goalForce >= 0 && goalForce <= 25 &&
		(isStarCatch == 0 || isStarCatch == 1) &&
		isEvent >= 0 && isEvent <= 4 &&
		(isBreakShield == 0 || isBreakShield == 1)
	) {
		success = true;
		// 시뮬레이션 진행을 위한 초기 변수 설정
		let forceLimit;
		let curLev = startForce;
		let curSuccess, curBreak;
		let failStack = 0;
		let sCount = 0;
		let fCount = 0;
		let bCount = 0;
		let cCount = 0;
		let totalCostN = 0;
		let curCost, costA, costB, curCostRound;
		let disCost, disCostRound;
		let resCost;
		let isOutofBound = false;
		//let result = "";

		// 결과 전달을 위한 string 변수 선언
		let isStarCatchS, isEventS, isBreakShieldS;

		// 아이템 레벨에 따른 스타포스 최대 강화 가능 수치 설정
		switch (true) {
			case itemLev >= 0 && itemLev < 95:
				forceLimit = 5;
				break;
			case itemLev >= 95 && itemLev < 108:
				forceLimit = 8;
				break;
			case itemLev >= 108 && itemLev < 118:
				forceLimit = 10;
				break;
			case itemLev >= 118 && itemLev < 128:
				forceLimit = 15;
				break;
			case itemLev >= 128 && itemLev < 138:
				forceLimit = 20;
				break;
			case itemLev >= 138:
				forceLimit = 25;
				break;
			default:
				break;
		}

		// 입력된 목표 스타포스 수치가 최대 강화 가능 수치보다 높으면, 목표 스타포스 수치를 최대 강화 가능 수치로 설정
		if (goalForce > forceLimit) {
			goalForce = forceLimit;
			isOutofBound = true;
		}

		// 스타캐치, 이벤트, 파괴방지 적용 여부에 대한 string 결정
		if (isStarCatch == 1) {
			isStarCatchS = '적용';
		} else isStarCatchS = '미적용';

		switch (isEvent) {
			case 1:
				isEventS = '상시 30% 할인';
				break;
			case 2:
				isEventS = '5, 10, 15성에서 성공률 100%';
				break;
			case 3:
				isEventS = '10성까지 1+1 강화';
				break;
			case 4:
				isEventS = '샤이닝 스타포스';
				break;
			default:
				isEventS = '미적용';
				break;
		}

		switch (isBreakShield) {
			case 1:
				isBreakShieldS = '15 ~ 17성 적용';
				break;
			default:
				isBreakShieldS = '미적용';
				break;
		}

		// 시작 또는 목표 강화 단계가 24를 초과한다면, 과부하 방지 메시지 전송
		if (startForce >= 24 || goalForce > 24) {
			success = false;
			content = "스타포스 시뮬레이션은 서버 과부하 방지를 위해 24성까지만 가능합니다.\n\n다시 시도해 주세요.";
		}
		// 목표 강화 단계가 시작 강화 단계보다 작거나 같다면, 오류 메시지 전송
		else if (goalForce <= startForce) {
			success = false;
			content = "스타포스 시뮬레이션의 목표 달성 수치는 시작 수치보다 항상 커야 합니다.\n\n다시 시도해 주세요.";
		} else {
			// ************ 강화 시뮬레이션 시작 ************
			while (curLev < goalForce) {
				// 스타캐치가 적용된다면, 스타캐치가 적용된 확률로 설정
				if (isStarCatch) {
					curSuccess = proNSuccessSC[curLev] / 100;
					curBreak = proNBreakSC[curLev] / 100;
				} else {
					curSuccess = proNSuccess[curLev] / 100;
					curBreak = proNBreak[curLev] / 100;
				}

				// 현재 강화 단계에 따른 강화 비용 설정 및 10의 자리에서 반올림
				switch (true) {
					case curLev >= 0 && curLev < 10:
						costA = Math.pow(itemLev, 3);
						costB = curLev + 1;
						curCost = 1000 + (costA * costB) / 25;
						break;

					case curLev >= 10 && curLev < 15:
						costA = Math.pow(itemLev, 3);
						costB = Math.pow(curLev + 1, 2.7);
						if (curLev == 10) {
							curCost = 1000 + (costA * costB) / 400;
						} else if (curLev == 11) {
							curCost = 1000 + (costA * costB) / 220;
						} else if (curLev == 12) {
							curCost = 1000 + (costA * costB) / 150;
						} else if (curLev == 13) {
							curCost = 1000 + (costA * costB) / 110;
						} else if (curLev == 14) {
							curCost = 1000 + (costA * costB) / 75;
						}
						break;

					case curLev >= 15:
						costA = Math.pow(itemLev, 3);
						costB = Math.pow(curLev + 1, 2.7);
						curCost = 1000 + (costA * costB) / 200;
						break;

					default:
						break;
				}
				curCostRound = Math.round(curCost / 100) * 100;

				// 스타포스 30% 할인 적용 중인 경우의 할인 가격 계산 및 반올림
				disCost = curCost * 0.7;
				disCostRound = Math.round(disCost / 100) * 100;

				// 반올림된 값을 다시 원래 변수에 저장
				curCost = curCostRound;
				disCost = disCostRound;

				// ********** 강화 비용 설정 시작 **********
				// 30% 상시 할인 이벤트를 적용한 경우 강화 비용에 할인된 비용을 적용.
				if (isEvent == 1 || isEvent == 4) {
					resCost = disCost;
				} else {
					resCost = curCost;
				}

				// 파괴방지 옵션이 15 ~ 17로 적용되어 있는 경우의 비용 계산. 30% 할인 이벤트의 경우 할인비용 + 원래비용으로 적용. 할인이 없으면 2배.
				if (isBreakShield == 2 && curLev >= 15 && curLev < 18) {
					if ((isEvent == 2 || isEvent == 4) && curLev == 15) {
					} else {
						if (isEvent == 1 || isEvent == 4) {
							resCost = resCost + curCost;
						} else {
							resCost *= 2;
						}
						curBreak = 0;
					}
				}
				// ********** 강화 비용 설정 종료 **********

				// 연속 2회 실패한다면, 찬스타임으로 성공확률 100%
				if (failStack == 2) {
					curSuccess = 1;
					cCount++;
				}

				// 5, 10, 15성 100% 이벤트 적용 중인 경우, 성공 확률을 100%로 조정.
				if (
					(isEvent == 2 || isEvent == 4) &&
					(curLev == 5 || curLev == 10 || curLev == 15)
				) {
					curSuccess = 1;
				}

				// ********** 강화 시작 **********
				if (Math.random() <= curSuccess) {
					// 10성까지 1+1 이벤트 적용 중인 경우, 성공 시 강화 수치 2 증가.
					if (isEvent == 3 && curLev <= 10) {
						curLev += 2;
					} else curLev++;
					sCount++;
					failStack = 0; // 강화 성공 시 실패 스택 초기화.

					//result = result + "성공, 이번 강화비용: " + resCost + "\n";
				}
				// 실패 후 파괴된다면, 강화 수치 12로 초기화 및 파괴 횟수 증가.
				else if (Math.random() <= curBreak) {
					curLev = 12;
					bCount++;
					//result = result + "파괴, 이번 강화비용: " + resCost + "\n";
				}
				// 단순 실패라면, 16성 이상이면서 20성이 아니라면, 강화 수치 1단계 감소 및 실패 스택 증가.
				else {
					if (curLev > 15 && curLev != 20) {
						curLev--;
						failStack++;
					}
					// 15성 이하이거나, 20성이라면 강화 수치가 감소하지 않고, 실패 스택이 증가하지 않음.
					fCount++;
					//result = result + "실패, 이번 강화비용: " + resCost + "\n";
				}

				totalCostN = totalCostN + resCost;
			}

			// ************ 강화 시뮬레이션 종료 ************

			// 총 강화 비용을 한국식 숫자 표기에 맞게 설정
			const totalCostLocaleN = AddComma(totalCostN);

			// 전송할 메시지 구성
			content = '<스타포스 시뮬레이션 완료>\n\n';
			if (isOutofBound) {
				message =
					message +
					'(시뮬레이션 목표 강화 수치가 아이템 레벨 제한에 맞지 않아 조정되었습니다.)\n\n';
			}
			content = content + itemLev + '레벨 아이템을\n';
			content = content + startForce + '성부터 ' + goalForce + '성까지 진행\n';
			content = content + '스타캐치 적용 여부: ' + isStarCatchS + '\n';
			content = content + '이벤트 적용 여부: ' + isEventS + '\n';
			content = content + '파괴방지 적용 여부: ' + isBreakShieldS + '\n\n';
			content = content + '성공 횟수: ' + sCount + '회\n';
			content = content + '실패 횟수: ' + fCount + '회\n';
			content = content + '찬스 타임: ' + cCount + '회\n';
			content = content + '파괴 횟수: ' + bCount + '회\n\n';
			content = content + '총 강화 비용: ' + totalCostLocaleN + '메소';
		}
	}
	// 각 parameter 값 중 하나라도 정상 범위로 입력되지 않은 경우, 오류 메시지 전송
	else {
		success = false;
		content =
			'명령어를 잘못 입력하셨습니다. 스타포스시뮬 명령어는 아래의 규칙에 따라 작성하셔야 합니다.\n\n<스타포스시뮬 명령어 사용 방법>\n"/스타포스시뮬 [a렙제템을] [n성부터] [m성까지] [스타캐치] [이벤트] [파괴방지]"\n\n[a렙제템을]: 0 ~ 200 사이의 숫자\n[n성부터]: 1 ~ 24 사이의 숫자\n[m성까지]: 1 ~ 24 사이의 숫자\n[스타캐치]: 스타캐치 적용 - 1 / 스타캐치 미적용 - 0\n[이벤트]: 이벤트 미적용 - 0 / 상시 30% 할인 - 1 / 5, 10, 15성 100% - 2 / 10성 이하 1+1 - 3  샤이닝 스타포스 - 4\n[파괴방지]: 파괴방지 미적용 - 0 / 15 ~ 17성 적용 - 1\n\n스타포스 시뮬레이션은 서버 과부하 방지를 위해 24성까지만 가능합니다.';
	}
	
	if(success) {
		successM = `${successM}성공`;
	} else {
		successM = `${successM}실패`;
	}
	
	res.status(200).json({
		result: encodeURIComponent(`${successM}\n\n${content}`)
	});
});

function AddComma(data_value) {
	var txtNumber = '' + data_value; // 입력된 값을 문자열 변수에 저장합니다.

	if (isNaN(txtNumber) || txtNumber == '') {
		// 숫자 형태의 값이 정상적으로 입력되었는지 확인합니다.
		return;
	} else {
		var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])'); // 정규식 형태 생성
		var arrNumber = txtNumber.split('.'); // 입력받은 숫자를 . 기준으로 나눔. (정수부와 소수부분으로 분리)
		arrNumber[0] += '.'; // 정수부 끝에 소수점 추가

		do {
			arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2'); // 정수부에서 rxSplit 패턴과 일치하는 부분을 찾아 replace 처리
		} while (rxSplit.test(arrNumber[0])); // 정규식 패턴 rxSplit 가 정수부 내에 있는지 확인하고 있다면 true 반환. 루프 반복.

		if (arrNumber.length > 1) {
			// txtNumber를 마침표(.)로 분리한 부분이 2개 이상이라면 (즉 소수점 부분도 있다면)
			return arrNumber.join(''); // 배열을 그대로 합칩. (join 함수에 인자가 있으면 인자를 구분값으로 두고 합침)
		} else {
			// txtNumber 길이가 1이라면 정수부만 있다는 의미.
			return arrNumber[0].split('.')[0]; // 위에서 정수부 끝에 붙여준 마침표(.)를 그대로 제거함.
		}
	}
}

function pickRandNum(min, max) {
	let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
	return randNum;
}

app.listen(3000, () => console.log('GSBot running in port 3000!'));