export type Status = 'Verified' | 'Pending' | 'Failed' | 'Under review';
export type Student = { id: string; name: string; apaar: string; enrollment: string; institution: string; program: string; year: string; status: Status; updated: string; dob: string; gender: string; department: string; admission: string; consent: 'Granted'|'Pending'; institutionCode: string };
export type Institution = { id: string; name: string; code: string; state: string; type: string; students: number; associated: number; verified: number; pending: number; status: 'Active'|'Attention'|'Onboarding' };
export type Audit = { id: number; time: string; action: string; entity: string; by: string; status: 'Success'|'Review'|'Failed'; description: string };

export const students: Student[] = [
 {id:'STU-1042',name:'Aarav Mehta',apaar:'XXXX-XXXX-4821',enrollment:'AKTU/23/04182',institution:'Northstar Institute of Technology',program:'B.Tech Computer Science',year:'2023–24',status:'Verified',updated:'Today, 09:42',dob:'14 Feb 2005',gender:'Male',department:'Computer Science & Engineering',admission:'2023',consent:'Granted',institutionCode:'NIT-DEL-2048'},
 {id:'STU-1038',name:'Ananya Iyer',apaar:'XXXX-XXXX-7134',enrollment:'VTU/22/19304',institution:'Sahyadri College of Engineering',program:'B.E. Information Science',year:'2022–23',status:'Pending',updated:'Today, 09:15',dob:'08 Jun 2004',gender:'Female',department:'Information Science',admission:'2022',consent:'Granted',institutionCode:'SCE-KA-1142'},
 {id:'STU-1036',name:'Kabir Singh',apaar:'XXXX-XXXX-2609',enrollment:'MUJ/24/00561',institution:'Maharaja University of Jaipur',program:'BCA Data Analytics',year:'2024–25',status:'Under review',updated:'Yesterday, 16:20',dob:'23 Nov 2006',gender:'Male',department:'Computer Applications',admission:'2024',consent:'Granted',institutionCode:'MUJ-RJ-3301'},
 {id:'STU-1031',name:'Meera Nair',apaar:'XXXX-XXXX-9405',enrollment:'CUSAT/23/08172',institution:'Coastal University of Science',program:'B.Tech Electronics',year:'2023–24',status:'Verified',updated:'Yesterday, 14:08',dob:'01 Apr 2005',gender:'Female',department:'Electronics & Communication',admission:'2023',consent:'Granted',institutionCode:'CUS-KL-0876'},
 {id:'STU-1028',name:'Rohan Deshmukh',apaar:'XXXX-XXXX-1187',enrollment:'PCTE/22/05091',institution:'Pune College of Technology & Engineering',program:'B.Tech Mechanical',year:'2022–23',status:'Failed',updated:'Yesterday, 11:37',dob:'17 Sep 2004',gender:'Male',department:'Mechanical Engineering',admission:'2022',consent:'Granted',institutionCode:'PCT-MH-9104'},
 {id:'STU-1020',name:'Diya Chatterjee',apaar:'XXXX-XXXX-6722',enrollment:'JAD/23/03317',institution:'Jadavpur Academy of Design',program:'B.Des Interaction Design',year:'2023–24',status:'Verified',updated:'28 Oct 2026',dob:'12 Jan 2005',gender:'Female',department:'Design',admission:'2023',consent:'Granted',institutionCode:'JAD-WB-2208'},
 {id:'STU-1014',name:'Vihaan Kapoor',apaar:'XXXX-XXXX-3980',enrollment:'DCR/24/01428',institution:'Delhi Centre for Research',program:'M.Tech Artificial Intelligence',year:'2024–25',status:'Pending',updated:'28 Oct 2026',dob:'29 Mar 2002',gender:'Male',department:'Artificial Intelligence',admission:'2024',consent:'Pending',institutionCode:'DCR-DEL-1770'},
 {id:'STU-1009',name:'Ishita Rao',apaar:'XXXX-XXXX-5556',enrollment:'NITK/22/09112',institution:'Sahyadri College of Engineering',program:'B.Tech Civil Engineering',year:'2022–23',status:'Verified',updated:'27 Oct 2026',dob:'05 Aug 2004',gender:'Female',department:'Civil Engineering',admission:'2022',consent:'Granted',institutionCode:'SCE-KA-1142'},
];
export const institutions: Institution[] = [
 {id:'INS-001',name:'Northstar Institute of Technology',code:'NIT-DEL-2048',state:'Delhi',type:'Engineering',students:3842,associated:3610,verified:3324,pending:118,status:'Active'},
 {id:'INS-002',name:'Sahyadri College of Engineering',code:'SCE-KA-1142',state:'Karnataka',type:'Engineering',students:2786,associated:2541,verified:2230,pending:204,status:'Attention'},
 {id:'INS-003',name:'Maharaja University of Jaipur',code:'MUJ-RJ-3301',state:'Rajasthan',type:'University',students:6120,associated:5788,verified:5402,pending:254,status:'Active'},
 {id:'INS-004',name:'Coastal University of Science',code:'CUS-KL-0876',state:'Kerala',type:'University',students:4210,associated:4020,verified:3862,pending:92,status:'Active'},
 {id:'INS-005',name:'Pune College of Technology & Engineering',code:'PCT-MH-9104',state:'Maharashtra',type:'Engineering',students:1944,associated:1644,verified:1401,pending:188,status:'Attention'},
];
export const auditSeed: Audit[] = [
 {id:1,time:'30 Oct 2026 · 09:42',action:'Verification completed',entity:'STU-1042',by:'Priya Sharma',status:'Success',description:'Simulated identity verification completed successfully.'},
 {id:2,time:'30 Oct 2026 · 09:15',action:'Verification initiated',entity:'STU-1038',by:'Arjun Menon',status:'Review',description:'Request moved to pending verification queue.'},
 {id:3,time:'29 Oct 2026 · 16:20',action:'Discrepancy detected',entity:'STU-1036',by:'System rule engine',status:'Review',description:'Name mismatch detected between submitted and existing records.'},
 {id:4,time:'29 Oct 2026 · 14:08',action:'APAAR ID associated',entity:'STU-1031',by:'Priya Sharma',status:'Success',description:'Synthetic masked APAAR identifier associated with record.'},
 {id:5,time:'28 Oct 2026 · 18:32',action:'Bulk import completed',entity:'IMP-2218',by:'Arjun Menon',status:'Success',description:'148 records imported · 142 valid · 6 require review.'},
];
export const registrationTrend = [{m:'May',v:420},{m:'Jun',v:610},{m:'Jul',v:780},{m:'Aug',v:960},{m:'Sep',v:1130},{m:'Oct',v:1390}];
export const monthlyActivity = [{m:'May',verified:330,pending:90},{m:'Jun',verified:470,pending:130},{m:'Jul',verified:602,pending:178},{m:'Aug',verified:744,pending:216},{m:'Sep',verified:901,pending:229},{m:'Oct',verified:1140,pending:250}];
export const discrepancyRows = [
 {student:'Kabir Singh',apaar:'XXXX-XXXX-2609',institution:'Maharaja University of Jaipur',type:'Name mismatch',severity:'High',date:'29 Oct 2026',status:'Open'},
 {student:'Rohan Deshmukh',apaar:'XXXX-XXXX-1187',institution:'Pune College of Technology & Engineering',type:'Enrollment mismatch',severity:'Critical',date:'28 Oct 2026',status:'Open'},
 {student:'Vihaan Kapoor',apaar:'XXXX-XXXX-3980',institution:'Delhi Centre for Research',type:'Missing consent',severity:'Medium',date:'27 Oct 2026',status:'Manual review'},
 {student:'Ananya Iyer',apaar:'XXXX-XXXX-7134',institution:'Sahyadri College of Engineering',type:'Academic year mismatch',severity:'Low',date:'26 Oct 2026',status:'Resolved'},
];
