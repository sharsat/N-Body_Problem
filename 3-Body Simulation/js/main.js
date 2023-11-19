const space = 100;
const speed = 20;
const maxVel = 2;
const k = 100;
const density = 0.005;
const N = 20;
const dt = 0.1;
var methods = [];
/*

INCLUDE INTEGRAL OF MOTIONS!!!!!

*/

let c1_e;
let eul = function (euler) {
	euler.setup = function () {
		let canvas_e = euler.createCanvas(500, 500, euler.WEBGL);
		canvas_e.position(50, 120);
		euler.camera(80, -200, 450);
		createBodies_e(euler);
	};
	euler.draw = function () {
		back(euler);
		drawBodies_e(euler);

		if (euler.frameCount == 300) {
			console.log(trackBody0_e);
		}
	};
};
new p5(eul);

let heu = function (heun) {
	heun.setup = function () {
		let canvas_h = heun.createCanvas(500, 500, heun.WEBGL);
		canvas_h.position(50, 120);
		heun.camera(80, -200, 450);
		createBodies_h(heun);
	};
	heun.draw = function () {
		back(heun);
		drawBodies_h(heun);

		if (heun.frameCount == 500) {
			//console.log(trackBody0_h);
		}
	};
};
//new p5(heu);

let ada = function (adam) {
	adam.setup = function () {
		let canvas_a = adam.createCanvas(500, 500, adam.WEBGL);
		canvas_a.position(50, 120);
		adam.camera(80, -200, 450);
		createBodies_a(adam);
	};
	adam.draw = function () {
		back(adam);
		drawBodies_a(adam);

		if (adam.frameCount == 800) {
			//console.log(trackBody0_a);
		}
	};
};
// new p5(ada);

let lea = function (leapfrog) {
	leapfrog.setup = function () {
		let canvas_l = leapfrog.createCanvas(500, 500, leapfrog.WEBGL);
		canvas_l.position(50, 670);
		leapfrog.camera(80, -200, 450);
		createBodies_l(leapfrog);
	};
	leapfrog.draw = function () {
		back(leapfrog);
		drawBodies_l(leapfrog);

		if (leapfrog.frameCount == 300) {
			// console.log(trackBody0_l);
		}
	};
};
new p5(lea);

let trackCoordinateA = [];
let trackCoordinateE = [];
let trackCoordinateH = [];
let trackCoordinateL = [];
let coordinate = function (coord) {
	coord.setup = function () {
		let canvas_c = coord.createCanvas(500, 500);
		canvas_c.position(50, 670);
	};

	coord.draw = function () {
		coord.background(0);
		coord.translate(coord.width / 2, coord.height / 2);
		//	trackCoordinate.push([...trackBody0_a.replaceAll(' ', ',')]);
		// console.log(trackCoordinate);
		for (let i of trackCoordinateA) {
			coord.fill(255,0,255);
			coord.circle(i[0] * 0.5, i[1] * 0.5, 2);
		}

		for (let i of trackCoordinateE) {
			coord.fill(0, 255, 0);
			coord.circle(i[0], i[1], 2);
		}

		for (let i of trackCoordinateH) {
			coord.fill(255, 0, 0);
			coord.circle(i[0], i[1], 2);
		}

		for (let i of trackCoordinateL) {
			coord.fill(255, 255, 255, 100);
			coord.circle(i[0], i[1], 2);
		}

		for (let i = 0; i < realVal.length; i += 3) {
			coord.fill(255, 255, 0);
			coord.circle(realVal[i], realVal[i + 1], 2);
		}
		//console.log(trackCoordinate);
	};
};

//new p5(coordinate);

let realVal = [
	49.970005998320566, -1.9996000959698397, 0.0, 49.88009589262548,
	-3.996803068143604, 0.0, 49.73048477900158, -5.989223262227892, 0.0,
	49.52152915579682, -7.974497812497857, 0.0, 49.25372397025637,
	-9.950297663843525, 0.0, 48.9276985611305, -11.914338157759476, 0.0,
	48.54421157150401, -13.864389054163356, 0.0, 48.10414492310487,
	-15.798283874780864, 0.0, 47.60849695749924, -17.71392847006303, 0.0,
	47.05837486053604, -19.609308729579734, 0.0, 46.45498649397939,
	-21.482497374896166, 0.0, 45.7996317624226, -23.33165979341968, 0.0,
	45.09369364440813, -25.15505889096417, 0.0, 44.33862901440639,
	-26.951058959240576, 0.0, 43.53595937725182, -28.718128571644456, 0.0,
	42.68726162919359, -30.45484253617472, 0.0, 41.79415895033841,
	-32.159882947782116, 0.0, 40.858311922409804, -33.83203939372099, 0.0,
	39.881409953894895, -35.47020837447333, 0.0, 38.86516308223917,
	-37.07339200953213, 0.0, 37.811294210194966, -38.640696101854175, 0.0,
	36.721531821088824, -40.17132763726797, 0.0, 35.59760320594895,
	-41.6645917957455, 0.0, 34.44122822436964, -43.11988855044763, 0.0,
	33.25411361086438, -44.53670892807919, 0.0, 32.037947829397304,
	-45.91463100059549, 0.0, 30.7943964708537, -47.25331567393564, 0.0,
	29.52509818143838, -48.552502334455816, 0.0, 28.231661104361926,
	-49.8120044083116, 0.0, 26.915659812642147, -51.031704883385, 0.0,
	25.578632707343303, -52.211551837633806, 0.0, 24.222079853011756,
	-53.351554012095484, 0.0, 22.847461220346926, -54.451776461317046, 0.0,
	21.45619530516894, -55.51233630879214, 0.0, 20.049658092405625,
	-56.53339863013015, 0.0, 18.629182334021817, -57.5151724822024, 0.0,
	17.19605711045697, -58.45790709243364, 0.0, 15.751527646135182,
	-59.361888218742415, 0.0, 14.296795350885183, -60.22743468738144, 0.0,
	12.83301806058359, -61.05489511307786, 0.0, 11.361310451953276,
	-61.844644803404485, 0.0, 9.882744608153777, -62.59708284720494, 0.0,
	8.398350713548492, -63.31262938512042, 0.0, 6.909117857788244,
	-63.991723058795515, 0.0, 5.415994931078577, -64.63481863414623, 0.0,
	3.9198915941806245, -65.24238479312417, 0.0, 2.4216793083086383,
	-65.81490208768005, 0.0, 0.9221924116234625, -66.35286104908964, 0.0,
	-0.5777707695329704, -66.85676044542807, 0.0, -2.0774467851649714,
	-67.32710567974542, 0.0, -3.576105911159866, -67.76440732138016, 0.0,
	-5.073050991925743, -68.16917976283293, 0.0, -6.56761628316006,
	-68.5419399946902, 0.0, -8.059166300812858, -68.88320649122277, 0.0,
	-9.547094681432489, -69.19349819947209, 0.0, -11.03082305828893,
	-69.47333362486752, 0.0, -12.509799956961398, -69.72323000667953, 0.0,
	-13.983499713441116, -69.9437025768979, 0.0, -15.451421417234922,
	-70.13526389642462, 0.0, -16.913087881455567, -70.29842326277907, 0.0,
	-18.368044641442992, -70.43368618382738, 0.0, -19.815858983073564,
	-70.54155391235956, 0.0, -21.256119001576547, -70.62252303664818, 0.0,
	-22.688432691382655, -70.67708512242444, 0.0, -24.11242706727672,
	-70.70572640200191, 0.0, -25.52774731690738, -70.70892750656343, 0.0,
	-26.934055984522587, -70.68716323789698, 0.0, -28.331032185640815,
	-70.64090237613034, 0.0, -29.718370852236966, -70.57060752025913, 0.0,
	-31.09578200791279, -70.47673495850015, 0.0, -32.46299007243113,
	-70.35973456572255, 0.0, -33.81973319492122, -70.22004972541933, 0.0,
	-35.16576261500646, -70.05811727387697, 0.0, -36.500842051059834,
	-69.87436746438618, 0.0, -37.824747114762516, -69.6692239495071, 0.0,
	-39.13726475111605, -69.44310377956492, 0.0, -40.43819270304705,
	-69.19641741569886, 0.0, -41.72733899973519, -68.9295687559277, 0.0,
	-43.00452146779522, -68.64295517282454, 0.0, -44.26956726444911,
	-68.33696756151095, 0.0, -45.52231243183322, -68.0119903967935, 0.0,
	-46.76260147159809, -67.66840179836704, 0.0, -47.99028693897532,
	-67.30657360310248, 0.0, -49.20522905550308, -66.9268714435266, 0.0,
	-50.40729533962309, -66.52965483167917, 0.0, -51.59636025438306,
	-66.11527724760798, 0.0, -52.772304871501774, -65.6840862318305, 0.0,
	-53.935016551077666, -65.23642348115291, 0.0, -55.08438863624547,
	-64.77262494729523, 0.0, -56.22032016211109, -64.29302093782309, 0.0,
	-57.342715578318646, -63.79793621893688, 0.0, -58.45148448462769,
	-63.28769011971154, 0.0, -59.54654137890489, -62.76259663742138, 0.0,
	-60.62780541695609, -62.22296454362248, 0.0, -61.69520018365002,
	-61.66909749069788, 0.0, -62.74865347480725, -61.1012941186022, 0.0,
	-63.788097089350494, -60.519848161571446, 0.0, -64.81346663123475,
	-59.92504855458887, 0.0, -65.8247013206964, -59.31717953942129, 0.0,
	-66.82174381438143, -58.6965207700631, 0.0, -67.8045400339335,
	-58.063347417441946, 0.0, -68.77303900263936, -57.4179302732627, 0.0,
	-69.72719268975129, -56.760535852876274, 0.0, -70.66695586212074,
	-56.09142649708099, 0.0, -71.59228594279622, -55.41086047277267, 0.0,
	-72.5031428762547, -54.71909207237462, 0.0, -73.39948899995092,
	-54.0163717119882, 0.0, -74.28128892188485, -53.30294602821547, 0.0,
	-75.14850940390114, -52.579057973614795, 0.0, -76.00111925044888,
	-51.84494691075591, 0.0, -76.83908920254335, -51.10084870485247, 0.0,
	-77.66239183668266, -50.34699581495252, 0.0, -78.47100146848602,
	-49.5836173836764, 0.0, -79.26489406083081, -48.8109393254951, 0.0,
	-80.04404713627598, -48.029184413547995, 0.0, -80.80843969357177,
	-47.23857236500197, 0.0, -81.55805212806338, -46.43931992495888, 0.0,
	-82.2928661558071, -45.63164094892221, 0.0, -83.01286474122614,
	-44.815746483834204, 0.0, -83.71803202814124, -43.99184484770066, 0.0,
	-84.40835327402094, -43.16014170782137, 0.0, -85.08381478730264,
	-42.32084015764568, 0.0, -85.7444038676431, -41.47414079227542, 0.0,
	-86.3901087489656, -40.620241782640306, 0.0, -87.02091854517559,
	-39.75933894836888, 0.0, -87.63682319842461, -38.891625829382775, 0.0,
	-88.2378134298079, -38.017293756240406, 0.0, -88.82388069238634,
	-37.136531919260506, 0.0, -89.39501712642964, -36.24952743645187, 0.0,
	-89.95121551678278, -35.35646542028064, 0.0, -90.49246925226247,
	-34.457529043304675, 0.0, -91.0187722869946, -33.55289960270642, 0.0,
	-91.53011910361035, -32.64275658375303, 0.0, -92.02650467821965,
	-31.72727772221816, 0.0, -92.50792444708786, -30.806639065792695, 0.0,
	-92.97437427494366, -29.88101503452029, 0.0, -93.42585042485041,
	-28.950578480284577, 0.0, -93.86234952957663, -28.01550074538366, 0.0,
	-94.2838685644055, -27.075951720220644, 0.0, -94.69040482132462,
	-26.132099900142236, 0.0, -95.08195588454305, -25.1841124414575, 0.0,
	-95.45851960728267, -24.232155216666, 0.0, -95.82009408979657,
	-23.276392868929804, 0.0, -96.16667765856764, -22.316988865815176, 0.0,
	-96.49826884664388, -21.354105552339945, 0.0, -96.81486637507109,
	-20.387904203351923, 0.0, -97.11646913538215, -19.418545075273414, 0.0,
	-97.40307617310886, -18.446187457237613, 0.0, -97.67468667228118,
	-17.4709897216502, 0.0, -97.93129994088207, -16.49310937420279, 0.0,
	-98.17291539722903, -15.51270310337003, 0.0, -98.39953255725302,
	-14.529926829417548, 0.0, -98.61115102265055, -13.544935752951574, 0.0,
	-98.80777046988298, -12.557884403037974, 0.0, -98.98939064000234,
	-11.56892668491804, 0.0, -99.15601132928185, -10.57821592735337, 0.0,
	-99.30763238063287, -9.585904929622245, 0.0, -99.4442536757905,
	-8.592146008202349, 0.0, -99.56587512825266, -7.597091043160788, 0.0,
	-99.67249667695732, -6.600891524284805, 0.0, -99.76411828068672,
	-5.603698596977097, 0.0, -99.8407399131858, -4.6056631079455315, 0.0,
	-99.902361558986, -3.606935650713808, 0.0, -99.94898320992576,
	-2.6076666109788107, 0.0, -99.98060486236096, -1.6080062118447813, 0.0,
	-99.99722651505887, -0.6081045589594964, 0.0, -99.99884816777289,
	0.3918883144199867, -0.0, -99.98546982049379, 1.3918224024056371, -0.0,
	-99.95709147337661, 2.391547681472275, -0.0, -99.91371312734334,
	3.390914065440711, -0.0, -99.85533478536178, 4.3897713604253, -0.0,
	-99.78195645440377, 5.387969219714137, -0.0, -99.693578148087,
	6.385357098558529, -0.0, -99.59019989000437, 7.381784208844692, -0.0,
	-99.4718217177493, 8.377099473618841, -0.0, -99.33844368764342,
	9.37115148143829, -0.0, -99.19006588017768, 10.363788440522342, -0.0,
	-99.02668840617655, 11.3548581326761, -0.0, -98.84831141369797,
	12.344207866957504, -0.0, -98.65493509568407, 13.331684433061241, -0.0,
	-98.44655969837628, 14.317134054391829, -0.0, -98.22318553051315,
	15.300402340797064, -0.0, -97.98481297332924, 16.281334240934427, -0.0,
	-97.73144249137474, 17.259773994241982, -0.0, -97.46307464417865,
	18.2355650824839, -0.0, -97.17971009877864, 19.208550180844497, -0.0,
	-96.88134964314348, 20.178571108538904, -0.0, -96.5679942005151,
	21.145468778914335, -0.0, -96.23964484470018, 22.109083149008427, -0.0,
	-95.89630281634204, 23.069253168541195, -0.0, -95.53796954020737,
	24.025816728303482, -0.0, -95.16464664352162, 24.978610607918085, -0.0,
	-94.77633597539344, 25.927470422940587, -0.0, -94.37303962736627,
	26.872230571268858, -0.0, -93.95475995514137, 27.81272417883315, -0.0,
	-93.52149960151685, 28.748783044532843, -0.0, -93.07326152059106,
	29.680237584392273, -0.0, -92.61004900328109, 30.60691677490098, -0.0,
	-92.13186570421024, 31.52864809551096, -0.0, -91.63871567002128,
	32.44525747025523, -0.0, -91.1306033691756, 33.356569208462076, -0.0,
	-90.60753372330186, 34.26240594452446, -0.0, -90.06951214016037,
	35.16258857670596, -0.0, -89.51654454829523, 36.05693620493798, -0.0,
	-88.94863743344754, 36.94526606758785, -0.0, -88.3657978768088,
	37.82739347716057, -0.0, -87.76803359519756, 38.703131754904234, -0.0,
	-87.15535298324639, 39.5722921642913, -0.0, -86.52776515769129,
	40.43468384334301, -0.0, -85.88528000386115, 41.29011373576452, -0.0,
	-85.22790822446828, 42.13838652087014, -0.0, -84.55566139080908,
	42.979304542259115, -0.0, -83.86855199648676, 43.81266773522549, -0.0,
	-83.16659351377767, 44.638273552865144, -0.0, -82.44980045276382,
	45.45591689086251, -0.0, -81.71818842336762, 46.26539001092982, -0.0,
	-80.97177420042503, 47.066482462875115, -0.0, -80.21057579194573,
	47.85898100528095, -0.0, -79.43461251071409, 48.64266952477385, -0.0,
	-78.64390504939323, 49.41732895386838, -0.0, -77.83847555930375,
	50.182737187371174, -0.0, -77.01834773305592, 50.93866899733757, -0.0,
	-76.18354689122641, 51.68489594656893, -0.0, -75.33410007327616,
	52.42118630065039, -0.0, -74.47003613292182, 53.14730493852716, -0.0,
	-73.59138583817781, 53.86301326162982, -0.0, -72.69818197630376,
	54.568069101549554, -0.0, -71.79045946389748, 55.262226626290044, -0.0,
	-70.86825546239322, 55.945236245112596, -0.0, -69.93160949923032,
	56.61684451200563, -0.0, -68.98056359497843, 57.27679402781655, -0.0,
	-68.01516239671332, 57.9248233410965, -0.0, -67.03545331795759,
	58.56066684770451, -0.0, -66.04148668551187, 59.184054689252434, -0.0,
	-65.03331589352226, 59.79471265045606, -0.0, -64.01099756514164,
	60.39236205549696, -0.0, -62.974591722167595, 60.97671966348889, -0.0,
	-61.92416196304931, 61.547497563184834, -0.0, -60.85977564968233,
	62.10440306705368, -0.0, -59.781504103425156, 62.64713860489428, -0.0,
	-58.68942281079368, 63.17540161715965, -0.0, -57.583611639312934,
	63.68888444820186, -0.0, -56.464155064020275, 64.1872742396622, -0.0,
	-55.33114240514732, 64.67025282426528, -0.0, -54.184668077519625,
	65.13749662030318, -0.0, -53.02483185224636, 65.58867652713161, -0.0,
	-51.85173913128709, 66.02345782203531, -0.0, -50.66550123551681,
	66.44150005885501, -0.0, -49.46623570692507, 66.84245696882692, -0.0,
	-48.25406662561795, 67.22597636410967, -0.0, -47.029124942309984,
	67.59170004454757, -0.0, -45.791548827022034, 67.93926370826341, -0.0,
	-44.54148403472094, 68.26829686673841, -0.0, -43.27908428866488,
	68.57842276510314, -0.0, -42.004511682233236, 68.86925830843904, -0.0,
	-40.71793710004899, 69.14041399496068, -0.0, -39.41954065921289,
	69.39149385705116, -0.0, -38.1095121714887, 69.6220954111908, -0.0,
	-36.78805162729512, 69.83180961794926, -0.0, -35.45536970236055,
	70.02022085329315, -0.0, -34.11168828791726, 70.18690689259688, -0.0,
	-32.757241045297214, 70.3314389088639, -0.0, -31.392273985797804,
	70.45338148680241, -0.0, -30.017046076667874, 70.55229265454784, -0.0,
	-28.631829874046755, 70.6277239349846, -0.0, -27.23691218365536,
	70.67922041878205, -0.0, -25.832594750002514, 70.70632086144803, -0.0,
	-24.41919497480961, 70.70855780689715, -0.0, -22.99704666529392,
	70.68545774022948, -0.0, -21.566500812858536, 70.63654127264226, -0.0,
	-20.12792640263982, 70.56132336162557, -0.0, -18.681711254228016,
	70.4593135698426, -0.0, -17.22826289373304, 70.33001636634117, -0.0,
	-15.768009457181487, 70.17293147403643, -0.0, -14.301400625026496,
	69.98755426765422, -0.0, -12.828908587300248, 69.77337622664925, -0.0,
	-11.351029038659611, 69.52988544789127, -0.0, -9.868282202243483,
	69.25656722323026, -0.0, -8.381213880885985, 68.95290468736005, -0.0,
	-6.890396533801302, 68.61837954171403, -0.0, -5.396430376365446,
	68.25247286044385, -0.0, -3.8999445000735378, 67.85466598481719, -0.0,
	-2.401598009129946, 67.42444151268103, -0.0, -0.9020811694351094,
	66.96128438988205, -0.0, 0.5978834350409468, 66.46468311079741, 0.0,
	2.0975397443623645, 65.93413103530065, 0.0, 3.5960970700257278,
	65.36912782965942, 0.0, 5.092728955503284, 64.76918103893138, 0.0,
	6.586572058922685, 64.1338077984285, 0.0, 8.076725068104812,
	63.462536691738364, 0.0, 9.562247659515604, 62.754909762573334, 0.0,
	11.042159514110573, 62.01048468738088, 0.0, 12.515439404572842,
	61.228837115143165, 0.0, 13.981024370033646, 60.40956318010774, 0.0,
	15.437808996047636, 59.55228219229173, 0.0, 16.884644819299773,
	58.656639509463844, 0.0, 18.32033987828341, 57.72230959289311, 0.0,
	19.743658432933387, 56.74899924746194, 0.0, 21.153320877923555,
	55.73645104469131, 0.0, 22.548003875971638, 54.684446924843996, 0.0,
];
