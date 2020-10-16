export interface AllStatesData {
  AN: An;
  AP: Ap;
  AR: Ar;
  AS: As;
  BR: Br;
  CH: Ch;
  CT: CT;
  DL: DL;
  DN: DN;
  GA: As;
  GJ: Gj;
  HP: HP;
  HR: Hr;
  JH: Jh;
  JK: Jk;
  KA: Ka;
  KL: Kl;
  LA: La;
  MH: Mh;
  ML: Ml;
  MN: As;
  MP: Mp;
  MZ: Mz;
  NL: Nl;
  OR: Or;
  PB: Pb;
  PY: Py;
  RJ: Rj;
  SK: Sk;
  TG: As;
  TN: Tn;
  TR: Tr;
  TT: Tt;
  UP: Up;
  UT: Ut;
  WB: Wb;
}

export interface An {
  districts: ANDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface ANDistricts {
  Unknown: PurpleUnknown;
}

export interface PurpleUnknown {
  meta: UnknownMeta;
  total: DeltaClass;
}

export interface UnknownMeta {
  tested: PurpleTested;
}

export interface PurpleTested {
  last_updated: Date;
  source: string;
}

export interface DeltaClass {
  confirmed: number;
  deceased?: number;
  recovered: number;
  tested?: number;
  other?: number;
}

export interface ANMeta {
  last_updated: Date;
  population: number;
  tested: PurpleTested;
  notes?: string;
}

export interface Ap {
  delta: DeltaClass;
  districts: APDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface APDistricts {
  Anantapur: Anantapur;
  Chittoor: Anantapur;
  'East Godavari': Anantapur;
  'Foreign Evacuees': ForeignEvacuees;
  Guntur: Anantapur;
  Krishna: Anantapur;
  Kurnool: Anantapur;
  'Other State': ForeignEvacuees;
  Prakasam: Anantapur;
  'S.P.S. Nellore': SPSNellore;
  Srikakulam: SPSNellore;
  Visakhapatnam: Anantapur;
  Vizianagaram: Anantapur;
  'West Godavari': Anantapur;
  'Y.S.R. Kadapa': Anantapur;
}

export interface Anantapur {
  delta: DeltaClass;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface PurpleMeta {
  population: number;
  tested: FluffyTested;
}

export interface FluffyTested {
  last_updated: Date;
}

export interface ForeignEvacuees {
  total: PurpleDelta;
}

export interface PurpleDelta {
  confirmed: number;
  recovered: number;
}

export interface SPSNellore {
  delta: PurpleDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface Ar {
  districts: ARDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface ARDistricts {
  Anjaw: Anjaw;
  'Capital Complex': CapitalComplex;
  Changlang: Anjaw;
  'Dibang Valley': CapitalComplex;
  'East Kameng': Anjaw;
  'East Siang': Anjaw;
  Kamle: Anjaw;
  'Kra Daadi': KraDaadi;
  'Kurung Kumey': Anjaw;
  'Lepa Rada': KraDaadi;
  Lohit: Anjaw;
  Longding: Anjaw;
  'Lower Dibang Valley': Anjaw;
  'Lower Siang': Anjaw;
  'Lower Subansiri': Anjaw;
  Namsai: Anjaw;
  'Pakke Kessang': KraDaadi;
  'Papum Pare': Anjaw;
  'Shi Yomi': Anjaw;
  Siang: Anjaw;
  Tawang: Anjaw;
  Tirap: Anjaw;
  'Upper Dibang Valley': UpperDibangValley;
  'Upper Siang': Anjaw;
  'Upper Subansiri': Anjaw;
  'West Kameng': Anjaw;
  'West Siang': Anjaw;
}

export interface Anjaw {
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface CapitalComplex {
  meta: CapitalComplexMeta;
  total: CapitalComplexDelta;
}

export interface CapitalComplexMeta {
  tested: FluffyTested;
}

export interface CapitalComplexDelta {
  tested: number;
}

export interface KraDaadi {
  meta: CapitalComplexMeta;
  total: DeltaClass;
}

export interface UpperDibangValley {
  meta: UpperDibangValleyMeta;
  total: PurpleDelta;
}

export interface UpperDibangValleyMeta {
  population: number;
}

export interface As {
  delta: DeltaClass;
  districts: ASDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface ASDistricts {
  Unknown: FluffyUnknown;
}

export interface FluffyUnknown {
  delta: DeltaClass;
  meta: UnknownMeta;
  total: DeltaClass;
}

export interface Br {
  delta: DeltaClass;
  districts: BRDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface BRDistricts {
  Araria: Anantapur;
  Arwal: SPSNellore;
  Aurangabad: SPSNellore;
  Banka: SPSNellore;
  Begusarai: SPSNellore;
  Bhagalpur: SPSNellore;
  Bhojpur: Anantapur;
  Buxar: SPSNellore;
  Darbhanga: SPSNellore;
  'East Champaran': SPSNellore;
  Gaya: SPSNellore;
  Gopalganj: SPSNellore;
  Jamui: SPSNellore;
  Jehanabad: SPSNellore;
  Kaimur: SPSNellore;
  Katihar: SPSNellore;
  Khagaria: SPSNellore;
  Kishanganj: SPSNellore;
  Lakhisarai: SPSNellore;
  Madhepura: SPSNellore;
  Madhubani: SPSNellore;
  Munger: SPSNellore;
  Muzaffarpur: SPSNellore;
  Nalanda: SPSNellore;
  Nawada: SPSNellore;
  Patna: Anantapur;
  Purnia: SPSNellore;
  Rohtas: SPSNellore;
  Saharsa: SPSNellore;
  Samastipur: SPSNellore;
  Saran: SPSNellore;
  Sheikhpura: SPSNellore;
  Sheohar: SPSNellore;
  Sitamarhi: Sitamarhi;
  Siwan: SPSNellore;
  Supaul: SPSNellore;
  Vaishali: Anantapur;
  'West Champaran': SPSNellore;
}

export interface Sitamarhi {
  delta: SitamarhiDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface SitamarhiDelta {
  confirmed: number;
}

export interface Ch {
  delta: CapitalComplexDelta;
  districts: CHDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface CHDistricts {
  Chandigarh: Chandigarh;
}

export interface Chandigarh {
  delta: CapitalComplexDelta;
  meta: ChandigarhMeta;
  total: DeltaClass;
}

export interface ChandigarhMeta {
  population: number;
  tested: PurpleTested;
}

export interface CT {
  districts: CTDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface CTDistricts {
  Balod: Anjaw;
  'Baloda Bazar': Anjaw;
  Balrampur: Anjaw;
  Bametara: Anjaw;
  Bastar: Anjaw;
  Bijapur: Anjaw;
  Bilaspur: Anjaw;
  'Dakshin Bastar Dantewada': Anjaw;
  Dhamtari: Anjaw;
  Durg: Anjaw;
  Gariaband: Anjaw;
  'Gaurela Pendra Marwahi': KraDaadi;
  'Janjgir Champa': Anjaw;
  Jashpur: Anjaw;
  Kabeerdham: Anjaw;
  Kondagaon: Anjaw;
  Korba: Anjaw;
  Koriya: Anjaw;
  Mahasamund: Anjaw;
  Mungeli: Anjaw;
  Narayanpur: Anjaw;
  'Other State': OtherState;
  Raigarh: Anjaw;
  Raipur: Anjaw;
  Rajnandgaon: Anjaw;
  Sukma: Anjaw;
  Surajpur: Anjaw;
  Surguja: Anjaw;
  'Uttar Bastar Kanker': Anjaw;
}

export interface OtherState {
  total: DeltaClass;
}

export interface DL {
  delta: DeltaClass;
  districts: DLDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface DLDistricts {
  Delhi: Delhi;
}

export interface Delhi {
  delta: DeltaClass;
  meta: ChandigarhMeta;
  total: DeltaClass;
}

export interface DN {
  delta: PurpleDelta;
  districts: DNDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface DNDistricts {
  'Dadra and Nagar Haveli': SPSNellore;
  Daman: Daman;
  Diu: Anjaw;
}

export interface Daman {
  delta: DamanDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface DamanDelta {
  recovered: number;
}

export interface Gj {
  delta: DeltaClass;
  districts: GJDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface GJDistricts {
  Ahmedabad: Anantapur;
  Amreli: SPSNellore;
  Anand: SPSNellore;
  Aravalli: SPSNellore;
  Banaskantha: Sitamarhi;
  Bharuch: SPSNellore;
  Bhavnagar: SPSNellore;
  Botad: SPSNellore;
  'Chhota Udaipur': SPSNellore;
  Dahod: Sitamarhi;
  Dang: Daman;
  'Devbhumi Dwarka': SPSNellore;
  Gandhinagar: Anantapur;
  'Gir Somnath': SPSNellore;
  Jamnagar: SPSNellore;
  Junagadh: SPSNellore;
  Kheda: SPSNellore;
  Kutch: SPSNellore;
  Mahisagar: SPSNellore;
  Mehsana: Anantapur;
  Morbi: SPSNellore;
  Narmada: SPSNellore;
  Navsari: SPSNellore;
  'Other State': KraDaadi;
  Panchmahal: SPSNellore;
  Patan: Anantapur;
  Porbandar: SPSNellore;
  Rajkot: SPSNellore;
  Sabarkantha: SPSNellore;
  Surat: Anantapur;
  Surendranagar: SPSNellore;
  Tapi: Anantapur;
  Vadodara: Anantapur;
  Valsad: SPSNellore;
}

export interface HP {
  delta: CapitalComplexDelta;
  districts: HPDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface HPDistricts {
  Bilaspur: Anjaw;
  Chamba: Chamba;
  Hamirpur: Anjaw;
  Kangra: Chamba;
  Kinnaur: Anjaw;
  Kullu: Anjaw;
  'Lahaul and Spiti': Anjaw;
  Mandi: Anjaw;
  Shimla: Chamba;
  Sirmaur: Anjaw;
  Solan: Anjaw;
  Una: Anjaw;
}

export interface Chamba {
  meta: ChambaMeta;
  total: DeltaClass;
}

export interface ChambaMeta {
  notes: string;
  population: number;
  tested: FluffyTested;
}

export interface Hr {
  delta: DeltaClass;
  districts: HRDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface HRDistricts {
  Ambala: Anantapur;
  Bhiwani: Anantapur;
  'Charkhi Dadri': Anantapur;
  Faridabad: Anantapur;
  Fatehabad: SPSNellore;
  Gurugram: SPSNellore;
  Hisar: Anantapur;
  Jhajjar: SPSNellore;
  Jind: SPSNellore;
  Kaithal: SPSNellore;
  Karnal: Anantapur;
  Kurukshetra: SPSNellore;
  Mahendragarh: Mahendragarh;
  Nuh: SPSNellore;
  Palwal: Sitamarhi;
  Panchkula: Anantapur;
  Panipat: SPSNellore;
  Rewari: SPSNellore;
  Rohtak: Anjaw;
  Sirsa: Sitamarhi;
  Sonipat: SPSNellore;
  Yamunanagar: Anantapur;
}

export interface Mahendragarh {
  delta: PurpleDelta;
  meta: UpperDibangValleyMeta;
  total: DeltaClass;
}

export interface Jh {
  delta: DeltaClass;
  districts: JHDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface JHDistricts {
  Bokaro: Anantapur;
  Chatra: Mahendragarh;
  Deoghar: SPSNellore;
  Dhanbad: Mahendragarh;
  Dumka: SPSNellore;
  'East Singhbhum': Mahendragarh;
  Garhwa: Mahendragarh;
  Giridih: SPSNellore;
  Godda: SPSNellore;
  Gumla: Mahendragarh;
  Hazaribagh: Mahendragarh;
  Jamtara: SPSNellore;
  Khunti: SPSNellore;
  Koderma: Mahendragarh;
  Latehar: Mahendragarh;
  Lohardaga: SPSNellore;
  Pakur: SPSNellore;
  Palamu: Palamu;
  Ramgarh: Mahendragarh;
  Ranchi: Ranchi;
  Sahibganj: SPSNellore;
  'Saraikela-Kharsawan': Mahendragarh;
  Simdega: Palamu;
  'West Singhbhum': Mahendragarh;
}

export interface Palamu {
  delta: SitamarhiDelta;
  meta: UpperDibangValleyMeta;
  total: DeltaClass;
}

export interface Ranchi {
  delta: DeltaClass;
  meta: UpperDibangValleyMeta;
  total: DeltaClass;
}

export interface Jk {
  delta: DeltaClass;
  districts: JKDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface JKDistricts {
  Anantnag: Mahendragarh;
  Bandipora: Mahendragarh;
  Baramulla: Ranchi;
  Budgam: Mahendragarh;
  Doda: Mahendragarh;
  Ganderbal: Mahendragarh;
  Jammu: Ranchi;
  Kathua: Mahendragarh;
  Kishtwar: Mahendragarh;
  Kulgam: Mahendragarh;
  Kupwara: Mahendragarh;
  Pulwama: Anantapur;
  Punch: Mahendragarh;
  Rajouri: Mahendragarh;
  Ramban: Mahendragarh;
  Reasi: Palamu;
  Samba: Palamu;
  Shopiyan: Mahendragarh;
  Srinagar: Ranchi;
  Udhampur: Mahendragarh;
}

export interface Ka {
  delta: DeltaClass;
  districts: KADistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface KADistricts {
  Bagalkote: Anantapur;
  Ballari: Anantapur;
  Belagavi: Anantapur;
  'Bengaluru Rural': SPSNellore;
  'Bengaluru Urban': Anantapur;
  Bidar: Anantapur;
  Chamarajanagara: Anantapur;
  Chikkaballapura: Anantapur;
  Chikkamagaluru: SPSNellore;
  Chitradurga: SPSNellore;
  'Dakshina Kannada': Anantapur;
  Davanagere: Anantapur;
  Dharwad: Anantapur;
  Gadag: SPSNellore;
  Hassan: SPSNellore;
  Haveri: SPSNellore;
  Kalaburagi: Anantapur;
  Kodagu: Anantapur;
  Kolar: Anantapur;
  Koppal: Anantapur;
  Mandya: Anantapur;
  Mysuru: Anantapur;
  'Other State': OtherState;
  Raichur: Anantapur;
  Ramanagara: Anantapur;
  Shivamogga: Anantapur;
  Tumakuru: Anantapur;
  Udupi: Anantapur;
  'Uttara Kannada': Anantapur;
  Vijayapura: Anantapur;
  Yadgir: SPSNellore;
}

export interface Kl {
  delta: DeltaClass;
  districts: KLDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface KLDistricts {
  Alappuzha: Ranchi;
  Ernakulam: Ranchi;
  Idukki: SPSNellore;
  Kannur: SPSNellore;
  Kasaragod: Mahendragarh;
  Kollam: Ranchi;
  Kottayam: Mahendragarh;
  Kozhikode: Anantapur;
  Malappuram: Anantapur;
  Palakkad: SPSNellore;
  Pathanamthitta: SPSNellore;
  Thiruvananthapuram: Anantapur;
  Thrissur: Anantapur;
  Wayanad: SPSNellore;
}

export interface La {
  districts: LADistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface LADistricts {
  Kargil: Anjaw;
  Leh: Anjaw;
}

export interface Mh {
  delta: DeltaClass;
  districts: MHDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface MHDistricts {
  Ahmednagar: Anjaw;
  Akola: Akola;
  Amravati: Akola;
  Aurangabad: Anjaw;
  Beed: Anjaw;
  Bhandara: Anjaw;
  Buldhana: Anjaw;
  Chandrapur: Anjaw;
  Dhule: Anjaw;
  Gadchiroli: Anjaw;
  Gondia: Anjaw;
  Hingoli: Anjaw;
  Jalgaon: Anjaw;
  Jalna: Anjaw;
  Kolhapur: Akola;
  Latur: Akola;
  Mumbai: Chamba;
  Nagpur: Chamba;
  Nanded: Chamba;
  Nandurbar: Anjaw;
  Nashik: Chamba;
  Osmanabad: Anjaw;
  'Other State': OtherState;
  Palghar: Anjaw;
  Parbhani: Anjaw;
  Pune: Chamba;
  Raigad: Chamba;
  Ratnagiri: Akola;
  Sangli: Akola;
  Satara: Anjaw;
  Sindhudurg: Akola;
  Solapur: Anjaw;
  Thane: Anjaw;
  Unknown: TentacledUnknown;
  Wardha: Anjaw;
  Washim: Akola;
  Yavatmal: Anjaw;
}

export interface Akola {
  meta: UpperDibangValleyMeta;
  total: DeltaClass;
}

export interface TentacledUnknown {
  delta: DeltaClass;
  total: DeltaClass;
}

export interface Ml {
  districts: MLDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface MLDistricts {
  'East Garo Hills': Akola;
  'East Jaintia Hills': UpperDibangValley;
  'East Khasi Hills': Akola;
  'North Garo Hills': UpperDibangValley;
  Ribhoi: Akola;
  'South Garo Hills': UpperDibangValley;
  'South West Garo Hills': Akola;
  'South West Khasi Hills': UpperDibangValley;
  'West Garo Hills': Akola;
  'West Jaintia Hills': UpperDibangValley;
  'West Khasi Hills': Akola;
}

export interface Mp {
  delta: DeltaClass;
  districts: MPDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface MPDistricts {
  'Agar Malwa': AgarMalwa;
  Alirajpur: Mahendragarh;
  Anuppur: SPSNellore;
  Ashoknagar: Sitamarhi;
  Balaghat: SPSNellore;
  Barwani: SPSNellore;
  Betul: SPSNellore;
  Bhind: SPSNellore;
  Bhopal: Anantapur;
  Burhanpur: SPSNellore;
  Chhatarpur: SPSNellore;
  Chhindwara: SPSNellore;
  Damoh: Anantapur;
  Datia: SPSNellore;
  Dewas: SPSNellore;
  Dhar: Anantapur;
  Dindori: SPSNellore;
  Guna: SPSNellore;
  Gwalior: SPSNellore;
  Harda: SPSNellore;
  Hoshangabad: SPSNellore;
  Indore: Anantapur;
  Jabalpur: Anantapur;
  Jhabua: SPSNellore;
  Katni: SPSNellore;
  Khandwa: Anantapur;
  Khargone: Anantapur;
  Mandla: Mahendragarh;
  Mandsaur: SPSNellore;
  Morena: SPSNellore;
  Narsinghpur: Anantapur;
  Neemuch: SPSNellore;
  Niwari: Niwari;
  Panna: Mahendragarh;
  Raisen: SPSNellore;
  Rajgarh: SPSNellore;
  Ratlam: Anantapur;
  Rewa: SPSNellore;
  Sagar: Anantapur;
  Satna: SPSNellore;
  Sehore: Anantapur;
  Seoni: SPSNellore;
  Shahdol: SPSNellore;
  Shajapur: SPSNellore;
  Sheopur: SPSNellore;
  Shivpuri: SPSNellore;
  Sidhi: SPSNellore;
  Singrauli: Ranchi;
  Tikamgarh: SPSNellore;
  Ujjain: SPSNellore;
  Umaria: Anantapur;
  Vidisha: Anantapur;
}

export interface AgarMalwa {
  delta: PurpleDelta;
  total: DeltaClass;
}

export interface Niwari {
  delta: DamanDelta;
  meta: CapitalComplexMeta;
  total: DeltaClass;
}

export interface Mz {
  delta: DeltaClass;
  districts: MZDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface MZDistricts {
  Aizawl: Aizawl;
  Champhai: UpperDibangValley;
  Hnahthial: ForeignEvacuees;
  Khawzawl: ForeignEvacuees;
  Kolasib: Kolasib;
  Lawngtlai: UpperDibangValley;
  Lunglei: Lunglei;
  Mamit: UpperDibangValley;
  Saiha: UpperDibangValley;
  Saitual: ForeignEvacuees;
  Serchhip: UpperDibangValley;
}

export interface Aizawl {
  delta: SitamarhiDelta;
  meta: UpperDibangValleyMeta;
  total: PurpleDelta;
}

export interface Kolasib {
  delta: PurpleDelta;
  meta: UpperDibangValleyMeta;
  total: PurpleDelta;
}

export interface Lunglei {
  delta: DamanDelta;
  meta: UpperDibangValleyMeta;
  total: PurpleDelta;
}

export interface Nl {
  delta: DeltaClass;
  districts: NLDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface NLDistricts {
  Dimapur: SPSNellore;
  Kiphire: Anjaw;
  Kohima: SPSNellore;
  Longleng: Anjaw;
  Mokokchung: Sitamarhi;
  Mon: Anantapur;
  Others: ForeignEvacuees;
  Peren: Sitamarhi;
  Phek: Anjaw;
  Tuensang: SPSNellore;
  Wokha: Anjaw;
  Zunheboto: Sitamarhi;
}

export interface Or {
  delta: DeltaClass;
  districts: ORDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface ORDistricts {
  Angul: SPSNellore;
  Balangir: SPSNellore;
  Balasore: Anantapur;
  Bargarh: Mahendragarh;
  Bhadrak: SPSNellore;
  Boudh: Anantapur;
  Cuttack: Anantapur;
  Deogarh: SPSNellore;
  Dhenkanal: SPSNellore;
  Gajapati: Sitamarhi;
  Ganjam: Anantapur;
  Jagatsinghpur: SPSNellore;
  Jajpur: Anantapur;
  Jharsuguda: SPSNellore;
  Kalahandi: Anantapur;
  Kandhamal: SPSNellore;
  Kendrapara: Anantapur;
  Kendujhar: Mahendragarh;
  Khordha: Ranchi;
  Koraput: SPSNellore;
  Malkangiri: SPSNellore;
  Mayurbhanj: SPSNellore;
  Nabarangapur: Anantapur;
  Nayagarh: Anantapur;
  Nuapada: SPSNellore;
  Puri: Anantapur;
  Rayagada: SPSNellore;
  Sambalpur: SPSNellore;
  'State Pool': StatePool;
  Subarnapur: Mahendragarh;
  Sundargarh: Ranchi;
}

export interface StatePool {
  delta: PurpleDelta;
  total: PurpleDelta;
}

export interface Pb {
  delta: DeltaClass;
  districts: PBDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface PBDistricts {
  Amritsar: Anantapur;
  Barnala: SPSNellore;
  Bathinda: Anantapur;
  Faridkot: SPSNellore;
  'Fatehgarh Sahib': Anantapur;
  Fazilka: Anantapur;
  Ferozepur: SPSNellore;
  Gurdaspur: Anantapur;
  Hoshiarpur: SPSNellore;
  Jalandhar: Anantapur;
  Kapurthala: Anantapur;
  Ludhiana: Anantapur;
  Mansa: SPSNellore;
  Moga: SPSNellore;
  Pathankot: SPSNellore;
  Patiala: Anantapur;
  Rupnagar: Anantapur;
  'S.A.S. Nagar': Anantapur;
  Sangrur: SPSNellore;
  'Shahid Bhagat Singh Nagar': SPSNellore;
  'Sri Muktsar Sahib': Anantapur;
  'Tarn Taran': SPSNellore;
}

export interface Py {
  delta: DeltaClass;
  districts: PYDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface PYDistricts {
  Karaikal: Karaikal;
  Mahe: Karaikal;
  Puducherry: Karaikal;
  Yanam: Karaikal;
}

export interface Karaikal {
  delta: DeltaClass;
  meta: ChambaMeta;
  total: DeltaClass;
}

export interface Rj {
  delta: DeltaClass;
  districts: RJDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface RJDistricts {
  Ajmer: Anantapur;
  Alwar: Anantapur;
  'BSF Camp': ForeignEvacuees;
  Banswara: Anantapur;
  Baran: Anantapur;
  Barmer: Anantapur;
  Bharatpur: Anantapur;
  Bhilwara: Anantapur;
  Bikaner: Anantapur;
  Bundi: Anantapur;
  Chittorgarh: Anantapur;
  Churu: Anantapur;
  Dausa: Anantapur;
  Dholpur: Anantapur;
  Dungarpur: Anantapur;
  Evacuees: ForeignEvacuees;
  Ganganagar: Anantapur;
  Hanumangarh: Anantapur;
  Italians: ForeignEvacuees;
  Jaipur: Anantapur;
  Jaisalmer: Anantapur;
  Jalore: Anantapur;
  Jhalawar: Jhalawar;
  Jhunjhunu: Anantapur;
  Jodhpur: Anantapur;
  Karauli: Anantapur;
  Kota: Anantapur;
  Nagaur: Anantapur;
  'Other State': OtherState;
  Pali: Anantapur;
  Pratapgarh: Anantapur;
  Rajsamand: Anantapur;
  'Sawai Madhopur': Jhalawar;
  Sikar: Anantapur;
  Sirohi: Anantapur;
  Tonk: Anantapur;
  Udaipur: Anantapur;
}

export interface Jhalawar {
  delta: JhalawarDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface JhalawarDelta {
  recovered: number;
  tested: number;
}

export interface Sk {
  delta: CapitalComplexDelta;
  districts: SKDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface SKDistricts {
  Unknown: StickyUnknown;
}

export interface StickyUnknown {
  delta: CapitalComplexDelta;
  meta: UnknownMeta;
  total: DeltaClass;
}

export interface Tn {
  delta: DeltaClass;
  districts: TNDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface TNDistricts {
  'Airport Quarantine': OtherState;
  Ariyalur: Anantapur;
  Chengalpattu: Anantapur;
  Chennai: Karaikal;
  Coimbatore: Anantapur;
  Cuddalore: Anantapur;
  Dharmapuri: SPSNellore;
  Dindigul: SPSNellore;
  Erode: Anantapur;
  Kallakurichi: Anantapur;
  Kancheepuram: Anantapur;
  Kanyakumari: SPSNellore;
  Karur: SPSNellore;
  Krishnagiri: SPSNellore;
  Madurai: SPSNellore;
  Nagapattinam: Anantapur;
  Namakkal: SPSNellore;
  Nilgiris: Anantapur;
  'Other State': PurpleOtherState;
  Perambalur: SPSNellore;
  Pudukkottai: SPSNellore;
  'Railway Quarantine': ForeignEvacuees;
  Ramanathapuram: SPSNellore;
  Ranipet: SPSNellore;
  Salem: Anantapur;
  Sivaganga: SPSNellore;
  Tenkasi: Anantapur;
  Thanjavur: Anantapur;
  Theni: SPSNellore;
  Thiruvallur: Anantapur;
  Thiruvarur: Anantapur;
  Thoothukkudi: SPSNellore;
  Tiruchirappalli: Anantapur;
  Tirunelveli: SPSNellore;
  Tirupathur: SPSNellore;
  Tiruppur: Anantapur;
  Tiruvannamalai: Anantapur;
  Vellore: Anantapur;
  Viluppuram: SPSNellore;
  Virudhunagar: SPSNellore;
}

export interface PurpleOtherState {
  total: OtherStateTotal;
}

export interface OtherStateTotal {
  deceased: number;
}

export interface Tr {
  delta: DeltaClass;
  districts: TRDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface TRDistricts {
  Dhalai: Anantapur;
  Gomati: Anantapur;
  Khowai: Anantapur;
  'North Tripura': Anantapur;
  Sipahijala: Anantapur;
  'South Tripura': Anantapur;
  Unokoti: Anantapur;
  'West Tripura': Anantapur;
}

export interface Tt {
  delta: DeltaClass;
  meta: ANMeta;
  total: DeltaClass;
}

export interface Up {
  delta: DeltaClass;
  districts: UPDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface UPDistricts {
  Agra: Anantapur;
  Aligarh: Anantapur;
  'Ambedkar Nagar': SPSNellore;
  Amethi: SPSNellore;
  Amroha: SPSNellore;
  Auraiya: Anantapur;
  Ayodhya: SPSNellore;
  Azamgarh: SPSNellore;
  Baghpat: SPSNellore;
  Bahraich: Anantapur;
  Ballia: SPSNellore;
  Balrampur: SPSNellore;
  Banda: SPSNellore;
  Barabanki: Anantapur;
  Bareilly: Anantapur;
  Basti: SPSNellore;
  Bhadohi: Anantapur;
  Bijnor: SPSNellore;
  Budaun: Sitamarhi;
  Bulandshahr: Anantapur;
  Chandauli: SPSNellore;
  Chitrakoot: SPSNellore;
  Deoria: SPSNellore;
  Etah: SPSNellore;
  Etawah: Anantapur;
  Farrukhabad: Anantapur;
  Fatehpur: SPSNellore;
  Firozabad: SPSNellore;
  'Gautam Buddha Nagar': Anantapur;
  Ghaziabad: SPSNellore;
  Ghazipur: Anantapur;
  Gonda: SPSNellore;
  Gorakhpur: Anantapur;
  Hamirpur: SPSNellore;
  Hapur: Anantapur;
  Hardoi: SPSNellore;
  Hathras: Sitamarhi;
  Jalaun: Anantapur;
  Jaunpur: SPSNellore;
  Jhansi: Anantapur;
  Kannauj: Kannauj;
  'Kanpur Dehat': SPSNellore;
  'Kanpur Nagar': Anantapur;
  Kasganj: SPSNellore;
  Kaushambi: SPSNellore;
  Kushinagar: SPSNellore;
  'Lakhimpur Kheri': SPSNellore;
  Lalitpur: SPSNellore;
  Lucknow: Anantapur;
  Maharajganj: Anantapur;
  Mahoba: SPSNellore;
  Mainpuri: SPSNellore;
  Mathura: SPSNellore;
  Mau: SPSNellore;
  Meerut: Anantapur;
  Mirzapur: SPSNellore;
  Moradabad: Anantapur;
  Muzaffarnagar: SPSNellore;
  Pilibhit: Anantapur;
  Pratapgarh: Anantapur;
  Prayagraj: Anantapur;
  'Rae Bareli': Anantapur;
  Rampur: SPSNellore;
  Saharanpur: Anantapur;
  Sambhal: Anantapur;
  'Sant Kabir Nagar': SPSNellore;
  Shahjahanpur: Anantapur;
  Shamli: SPSNellore;
  Shrawasti: SPSNellore;
  Siddharthnagar: SPSNellore;
  Sitapur: SPSNellore;
  Sonbhadra: SPSNellore;
  Sultanpur: SPSNellore;
  Unnao: SPSNellore;
  Varanasi: Anantapur;
}

export interface Kannauj {
  delta: KannaujDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface KannaujDelta {
  deceased: number;
  recovered: number;
}

export interface Ut {
  delta: DeltaClass;
  districts: UTDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface UTDistricts {
  Almora: SPSNellore;
  Bageshwar: SPSNellore;
  Chamoli: Chamoli;
  Champawat: SPSNellore;
  Dehradun: Anantapur;
  Haridwar: Anantapur;
  Nainital: Anantapur;
  'Pauri Garhwal': SPSNellore;
  Pithoragarh: Sitamarhi;
  Rudraprayag: SPSNellore;
  'Tehri Garhwal': SPSNellore;
  'Udham Singh Nagar': Anantapur;
  Uttarkashi: Anantapur;
}

export interface Chamoli {
  delta: ChamoliDelta;
  meta: PurpleMeta;
  total: DeltaClass;
}

export interface ChamoliDelta {
  other: number;
  recovered: number;
}

export interface Wb {
  delta: DeltaClass;
  districts: WBDistricts;
  meta: ANMeta;
  total: DeltaClass;
}

export interface WBDistricts {
  Alipurduar: Mahendragarh;
  Bankura: Mahendragarh;
  Birbhum: Ranchi;
  'Cooch Behar': Mahendragarh;
  'Dakshin Dinajpur': Mahendragarh;
  Darjeeling: Ranchi;
  Hooghly: Ranchi;
  Howrah: Ranchi;
  Jalpaiguri: Ranchi;
  Jhargram: Mahendragarh;
  Kalimpong: Mahendragarh;
  Kolkata: Ranchi;
  Malda: Ranchi;
  Murshidabad: Ranchi;
  Nadia: Ranchi;
  'North 24 Parganas': Ranchi;
  'Other State': OtherState;
  'Paschim Bardhaman': Ranchi;
  'Paschim Medinipur': Ranchi;
  'Purba Bardhaman': Mahendragarh;
  'Purba Medinipur': Ranchi;
  Purulia: Mahendragarh;
  'South 24 Parganas': Ranchi;
  'Uttar Dinajpur': Mahendragarh;
}
