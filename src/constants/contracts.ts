const contracts = {
	distributor: {
		4002: '',
		250: '0xc07bC04720A37AA9d8DAd18635620d86c4a37d97',
	},
	bonusDistributor: {
		4002: '',
		250: '0x7628316ECD43fD870692Ef6e52c580d4A3a092C1',
	},
	liquidityGenerator: {
		4002: '',
		250: '0x68Ca0F3c4fDf440F54801DAe6B67C8594044D257',
	},
	creepy: {
		4002: '',
		250: '0x25A96D29Ac22802149fa819255b9377eDea9415f',
	},
	// inCreepy: {
	// 	4002: '',
	// 	250: '0x25A96D29Ac22802149fa819255b9377eDea9415f',
	// },
	creepyTest: {
		4002: '',
		250: '0x94324f88f41F64266bbf7Cb477F3A7c5785cff73',
	},
	syrup: {
		4002: '',
		250: '',
	},
	masterChef: {
		4002: '',
		250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
	},
	masterChefV2: {
		4002: '',
		250: '0xb3bf8AAabAd162f6f4F7A19f769c6ad2ddaC0418',
	},
	lottery: {
		4002: '',
		250: '',
	},
	gaugesProxy: {
		4002: '',
		250: '0x420b17f69618610DE18caCd1499460EFb29e1d8f',
	},
	mInSpirit: {
		4002: '',
		250: '0x3554f3369a3530ABC031D938d2f717006Fe01fA1',
	},
	feeDistributor: {
		4002: '',
		250: '0xD5A2a2d1d35724396bBB547554AD73b52C0f4993',
	},
	olaLens: {
		4002: '',
		250: '0xd392114c8587AAE97d48A9fe14eD680440A0a05c',
	},
	spiritProfile: {
		4002: '',
		250: '',
	},
	claimRefund: {
		4002: '',
		250: '',
	},
	pointCenterIfo: {
		4002: '',
		250: '',
	},
	bunnySpecial: {
		4002: '',
		250: '',
	},
	wftm: {
		4002: '0xf1277d1ed8ad466beddf92ef448a132661956621',
		250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
	},
	mulltiCall: {
		250: '0x7f1AAcF8c4D33983d1460Da7ff55aE4e64eCb651',
		4002: '0xec831FB81d2c37243C12Ed611F7A940540302982',
	},
	fusd: {
		250: '0xad84341756bf337f5a0164515b1f6f993d194e1f',
		4002: '',
	},
	feth: {
		250: '0x658b0c7613e890ee50b8c4bc6a3f41ef411208ad',
		4002: '',
	},
	fbtc: {
		250: '0xe1146b9ac456fcbb60644c36fd3f868a9072fc6e',
		4002: '',
	},
	usdc: {
		250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
		4002: '',
	},
	wbtc: {
		250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
		4002: '',
	},
	weth: {
		250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
		4002: '',
	},
	cover: {
		250: '0xB01E8419d842beebf1b70A7b5f7142abbaf7159D',
		4002: '',
	},
	cream: {
		250: '0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6',
		4002: '',
	},
	crv: {
		250: '0x1E4F97b9f9F913c46F1632781732927B9019C68b',
		4002: '',
	},
	dai: {
		250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
		4002: '',
	},
	sfi: {
		250: '0x924828a9Fb17d47D0eb64b57271D10706699Ff11',
		4002: '',
	},
	sushi: {
		250: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
		4002: '',
	},
	snx: {
		250: '0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc',
		4002: '',
	},
	link: {
		250: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
		4002: '',
	},
	yfi: {
		250: '0x29b0Da86e484E1C0029B56e817912d778aC0EC69',
		4002: '',
	},
	sftm: {
		250: '0x69c744d3444202d35a2783929a0f930f2fbb05ad',
		4002: '',
	},
	zoo: {
		250: '0x09e145a1d53c0045f41aeef25d8ff982ae74dd56',
		4002: '',
	},
	ice: {
		250: '0xf16e81dce15b08f326220742020379b855b87df9',
		4002: '',
	},
	frax: {
		250: '0xaf319E5789945197e365E7f7fbFc56B130523B33',
		4002: '',
	},
	bitb: {
		250: '0xbac5d43a56696e5d0cb631609e85798f564b513b',
		4002: '',
	},
	fxs: {
		250: '0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62',
		4002: '',
	},
	fusdt: {
		250: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
		4002: '',
	},
	any: {
		250: '0xdDcb3fFD12750B45d32E084887fdf1aABAb34239',
		4002: '',
	},
	cztears: {
		250: '0x907f1A48918Bb5DE07c12443CAB0e6EEfCC611BC',
		4002: '',
	},
	bnb: {
		250: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
		4002: '',
	},
	woofy: {
		250: '0xD0660cD418a64a1d44E9214ad8e459324D8157f1',
		4002: '',
	},
	supra: {
		250: '0xee90fAF3216dFAE5E8aC1f3F48f10527f38fFf78',
		4002: '',
	},
	mm: {
		250: '0xbFaf328Fe059c53D936876141f38089df0D1503D',
		4002: '',
	},
	gton: {
		250: '0xc1be9a4d5d45beeacae296a7bd5fadbfc14602c4',
		4002: '',
	},
	busd: {
		250: '0xc931f61b1534eb21d8c11b24f3f5ab2471d4ab50',
		4002: '',
	},
	steak: {
		250: '0x05848B832E872d9eDd84AC5718D58f21fD9c9649',
		4002: '',
	},
	ifusd: {
		250: '0x9fC071cE771c7B27b7d9A57C32c0a84c18200F8a',
		4002: '',
	},
	bifi: {
		250: '0xad260f380c9a30b1d60e4548a75010ede630b665',
		4002: '',
	},
	mim: {
		250: '0x82f0b8b456c1a451378467398982d4834b6829c1',
		4002: '',
	},
	lqdr: {
		250: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
		4002: '',
	},
	dis: {
		250: '0x0e121961DD741C9D49C9A04379da944A9D2FAc7a',
	},
	tosdis: {
		250: '0x0e121961dd741c9d49c9a04379da944a9d2fac7a',
		4002: '',
	},
	grim: {
		250: '0x7ec94c4327dc757601b4273cd67014d7760be97e',
		4002: '',
	},
	shade: {
		250: '0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262',
		4002: '',
	},
	reaper: {
		250: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
		4002: '',
	},
	elk: {
		250: '0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c',
		4002: '',
	},
	xsteak: {
		250: '0xb632c5d42bd4a44a617608ad1c7d38f597e22e3c',
		4002: '',
	},
	just: {
		250: '0x37c045be4641328dfeb625f1dde610d061613497',
		4002: '',
	},
	casper: {
		250: '0xc30d1b0ce932c3dd3373a2c23ada4e9608caf345',
		4002: '',
	},
	unidx: {
		250: '0x2130d2a1e51112d349ccf78d2a1ee65843ba36e0',
		4002: '',
	},
	rai: {
		250: '0xa71353bb71dda105d383b02fc2dd172c4d39ef8b',
		4002: '',
	},
	nips: {
		250: '0x667afbb7d558c3dfd20fabd295d31221dab9dbc2',
		4002: '',
	},
	start: {
		250: '0x8ca2ecbce34c322fcea6db912d9dbfd2dda5920d',
		4002: '',
	},
	ginspirit: {
		250: '0x2787bea3366335068bf8b4a253044d09ea4e1c96',
		4002: '',
	},
	atri: {
		250: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
		4002: '',
	},
	death: {
		250: '0xeaF45B62d9d0Bdc1D763baF306af5eDD7C0d7e55',
		4002: '',
	},
	rndm: {
		250: '0x49ac072c793fb9523f0688a0d863aadfbfb5d475',
		4002: '',
	},
	ele: {
		250: '0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0',
		4002: '',
	},
	spell: {
		250: '0x468003B688943977e6130F4F68F23aad939a1040',
		4002: '',
	},
	papr: {
		250: '0xc5e7a99a20941cbf56e0d4de608332cdb792e23e',
		4002: '',
	},
	tarot: {
		250: '0xc5e2b037d30a390e62180970b3aa4e91868764cd',
		4002: '',
	},
	tomb: {
		250: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
		4002: '',
	},
	wmemo: {
		250: '0xddc0385169797937066bbd8ef409b5b3c0dfeb52',
		4002: '',
	},
	linspirit: {
		250: '0xc5713b6a0f26bf0fdc1c52b90cd184d950be515c',
		4002: '',
	},
	yoshi: {
		250: '0x3dc57B391262e3aAe37a08D91241f9bA9d58b570',
		4002: '',
	},
	sspell: {
		250: '0xbB29D2A58d880Af8AA5859e30470134dEAf84F2B',
		4002: '',
	},
	fang: {
		250: '0x49894fcc07233957c35462cfc3418ef0cc26129f',
		4002: '',
	},
	pills: {
		250: '0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286',
		4002: '',
	},
};

export default contracts;
