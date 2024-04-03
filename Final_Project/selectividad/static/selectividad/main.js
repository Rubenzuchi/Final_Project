const grados = {
    'ADMINISTRACION Y DIRECCION DE EMPRESAS': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (GRUPO EN INGLES)': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (grupo formaciOn en inglEs)': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (grupo inglEs)': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + DERECHO': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + DERECHO (grupo formaciOn bilingüe)': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + FINANZAS Y CONTABILIDAD': 'SYJ', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + TURISMO': 'SYJ', 
    'ANALISIS ECONOMICO': 'SYJ', 
    'ANTROPOLOGIA SOCIAL Y CULTURAL': 'SYJ', 
    'ARQUEOLOGIA': 'AYH', 
    'ARQUITECTURA NAVAL E INGENIERIA MARITIMA': 'IYA', 
    'BELLAS ARTES': 'AYH', 
    'BIOLOGIA': 'C', 
    'BIOMEDICINA BASICA Y EXPERIMENTAL': 'SD',
    'BIOQUIMICA': 'C', 
    'BIOTECNOLOGIA': 'C', 
    'CIBERSEGURIDAD E INTELIGENCIA ARTIFICIAL': 'IYA', 
    'CIENCIA Y TECNOLOGIA DE LOS ALIMENTOS': 'C', 
    'CIENCIAS AMBIENTALES': 'C', 
    'CIENCIAS AMBIENTALES + CIENCIAS DEL MAR': 'C', 
    'CIENCIAS AMBIENTALES + GEOGRAFIA E HISTORIA': 'SIN', 
    'CIENCIAS AMBIENTALES + INGENIERIA FORESTAL Y DEL MEDIO NATURAL': 'SIN', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE': 'SYJ', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE (ENSENANZA BILINGÜE)': 'SYJ', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE + EDUCACION PRIMARIA': 'SYJ', 
    'CIENCIAS DEL MAR': 'C', 
    'CIENCIAS DEL MAR + CIENCIAS AMBIENTALES': 'C', 
    'CIENCIAS GASTRONOMICAS Y GESTION HOTELERA': 'SYJ', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION': 'SYJ', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION (GR) + PERIODISMO (MA)': 'SYJ', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION + DERECHO': 'SYJ', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION + SOCIOLOGIA': 'SYJ', 
    'CIENCIAS POLITITICAS Y DE LA ADMINISTRACION + DERECHO': 'SYJ', 
    'CINE Y CULTURA': 'AYH', 
    'CINE Y CULTURA (modalidad no presencial)': 'AYH', 
    'COMUNICACION': 'SYJ',
    'COMUNICACION + COMUNICACION DIGITAL': 'SYJ', 
    'COMUNICACION AUDIOVISUAL': 'SYJ', 
    'COMUNICACION DIGITAL': 'SYJ', 
    'CONSERVACION Y RESTAURACION DE BIENES CULTURALES': 'AYH', 
    'CRIMINOLOGIA': 'SYJ', 
    'CRIMINOLOGIA Y SEGURIDAD': 'SYJ', 
    'DERECHO': 'SYJ', 
    'DERECHO + CIENCIAS POLITICAS Y DE LA ADMINISTRACION': 'SYJ', 
    'DERECHO + CRIMINOLOGIA': 'SYJ', 
    'DERECHO + CRIMINOLOGIA Y SEGURIDAD': 'SYJ', 
    'DERECHO + ECONOMIA': 'SYJ', 
    'DERECHO + FILOSOFIA': 'SIN', 
    'DERECHO + FINANZAS Y CONTABILIDAD': 'SYJ', 
    'DERECHO + GESTION Y ADM. PUB.': 'SYJ', 
    'DERECHO + RELACIONES LABORALES Y RECURSOS HUMANOS': 'SYJ', 
    'DERECHO Y BACHELOR OF LAWS (UNIVERSIDAD DE BAYREUTH)': 'SYJ', 
    'ECONOMIA': 'SYJ', 
    'ECONOMIA + ADMINISTRACION Y DIRECCION EMPRESAS (FORMACION BILINGÜE)': 'SYJ', 
    'ECONOMIA + MATEMATICAS': 'SIN', 
    'ECONOMIA BILINGÜE': 'SYJ', 
    'EDIFICACION': 'IYA', 
    'EDIFICACION (antes Arquitectura TEcnica)': 'IYA', 
    'EDIFICACION + ADMINISTRACION Y DIRECCION DE EMPRESAS': 'SIN', 
    'EDUCACION INFANTIL': 'SYJ', 
    'EDUCACION INFANTIL (ITINERARIO BILINGÜE)': 'SYJ', 
    'EDUCACION INFANTIL + EDUCACION PRIMARIA': 'SYJ', 
    'EDUCACION PRIMARIA': 'SYJ', 
    'EDUCACION PRIMARIA (FORMACION BILINGÜE)': 'SYJ', 
    'EDUCACION PRIMARIA (ITINERARIO BILINGÜE)': 'SYJ', 
    'EDUCACION PRIMARIA (ITINERARIO BILINGÜE) + ESTUDIOS INGLESES': 'SIN', 
    'EDUCACION PRIMARIA (MENCION LENGUA EXTRANJERA-INGLES) + ESTUDIOS INGLESES': 'SIN', 
    'EDUCACION PRIMARIA + EDUCACION INFANTIL': 'SYJ', 
    'EDUCACION PRIMARIA + ESTUDIOS FRANCESES': 'SIN', 
    'EDUCACION PRIMARIA + ESTUDIOS INGLESES': 'SIN', 
    'EDUCACION SOCIAL': 'SYJ', 
    'ENFERMERIA': 'SD', 
    'ENFERMERIA + FISIOTERAPIA': 'SD', 
    'ENOLOGIA': 'C', 
    'ENOLOGIA + INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL': 'SIN', 
    'ESTADISTICA': 'C', 
    'ESTADISTICA Y EMPRESA': 'SYJ', 
    'ESTUDIOS ARABES E ISLAMICOS': 'AYH', 
    'ESTUDIOS ARABES E ISLAMICOS + ESTUDIOS INGLESES': 'AYH', 
    'ESTUDIOS DE ARQUITECTURA': 'IYA', 
    'ESTUDIOS DE ASIA ORIENTAL': 'AYH',
    'ESTUDIOS FRANCESES': 'AYH', 
    'ESTUDIOS FRANCESES + ESTUDIOS INGLESES': 'AYH', 
    'ESTUDIOS INGLESES': 'AYH', 
    'ESTUDIOS INGLESES + FILOLOGIA HISPANICA': 'AYH', 
    'ESTUDIOS TRANSCULTURALES EUROPEOS: LENGUAS, CULTURAS, INTERACCIONES': 'AYH', 
    'FARMACIA': 'SD', 
    'FARMACIA + NUTRICION HUMANA Y DIETETICA': 'SD', 
    'FARMACIA + OPTICA Y OPTOMETRIA': 'SD', 
    'FILOLOGIA CLASICA': 'AYH', 
    'FILOLOGIA CLASICA + ESTUDIOS INGLESES': 'AYH', 
    'FILOLOGIA CLASICA + FILOLOGIA HISPANICA': 'AYH',
    'FILOLOGIA HISPANICA': 'AYH', 
    'FILOLOGIA HISPANICA + ESTUDIOS INGLESES': 'AYH', 
    'FILOSOFIA': 'AYH', 
    'FINANZAS Y CONTABILIDAD': 'SYJ', 
    'FINANZAS Y CONTABILIDAD (GRUPO EN INGLES)': 'SYJ', 
    'FINANZAS Y CONTABILIDAD + ADMINISTRACION Y DIRECCION DE EMPRESAS': 'SYJ', 
    'FINANZAS Y CONTABILIDAD + RELACIONES LABORALES Y RECURSOS HUMANOS': 'SYJ', 
    'FISICA': 'C', 
    'FISICA + INGENIERIA DE MATERIALES': 'SIN', 
    'FISICA + MATEMATICAS': 'C', 
    'FISIOTERAPIA': 'SD', 
    'FISIOTERAPIA + CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE': 'SIN', 
    'FUNDAMENTOS DE ARQUITECTURA': 'IYA', 
    'GEOGRAFIA E HISTORIA': 'AYH', 
    'GEOGRAFIA E HISTORIA + RELACIONES INTERNACIONALES': 'SIN', 
    'GEOGRAFIA Y GESTION DEL TERRITORIO': 'SYJ', 
    'GEOGRAFIA Y GESTION DEL TERRITORIO + HISTORIA': 'SIN', 
    'GEOLOGIA': 'C', 
    'GEOLOGIA + CIENCIAS AMBIENTALES': 'C', 
    'GESTION CULTURAL': 'AYH', 
    'GESTION Y ADMINISTRACION PUBLICA': 'SYJ', 
    'GRADO EN CIENCIAS POLITICAS Y DE LA ADMINISTRACION (GR) + PERIODISMO (MA)': 'SYJ', 
    'HISTORIA': 'AYH', 
    'HISTORIA + HISTORIA DEL ARTE': 'AYH', 
    'HISTORIA + HUMANIDADES': 'AYH', 
    'HISTORIA DEL ARTE': 'AYH', 
    'HISTORIA Y CIENCIAS DE LA MUSICA': 'AYH', 
    'HUMANIDADES': 'AYH', 
    'HUMANIDADES + TRADUCCION E INTERPRETACION (INGLES)': 'AYH', 
    'INFORMACION Y DOCUMENTACION': 'SYJ', 
    'INGENIERIA AEROESPACIAL': 'IYA', 
    'INGENIERIA AGRICOLA': 'IYA', 
    'INGENIERIA AGRICOLA (US) + CIENCIAS AMBIENTALES (UPO)': 'SIN', 
    'INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL': 'IYA', 
    'INGENIERIA CIVIL': 'IYA', 
    'INGENIERIA CIVIL (SEMIPRESENCIAL)': 'IYA', 
    'INGENIERIA CIVIL + ADMINISTRACION Y DIRECCION DE EMPRESAS': 'SIN', 
    'INGENIERIA CIVIL + INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES': 'IYA', 
    'INGENIERIA CIVIL + INGENIERIA EN TECNOLOGIAS MINERAS': 'IYA', 
    'INGENIERIA DE COMPUTADORES': 'IYA', 
    'INGENIERIA DE LA ENERGIA': 'IYA', 
    'INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES': 'IYA', 
    'INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES + ING. ELECTRICA': 'IYA', 
    'INGENIERIA DE LA SALUD': 'IYA', 
    'INGENIERIA DE MATERIALES': 'IYA', 
    'INGENIERIA DE ORGANIZACION INDUSTRIAL': 'IYA', 
    'INGENIERIA DE RECURSOS ENERGETICOS': 'IYA', 
    'INGENIERIA DE SISTEMAS DE TELECOMUNICACION': 'IYA', 
    'INGENIERIA DE SISTEMAS ELECTRONICOS': 'IYA', 
    'INGENIERIA DE SOFTWARE': 'IYA', 
    'INGENIERIA DE SONIDO E IMAGEN': 'IYA', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION': 'IYA', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION (PARS MAster en IngenierIa de TelecomunicaciOn)': 'IYA', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION + MATEMATICAS': 'SIN', 
    'INGENIERIA DE TECNOLOGIAS MINERAS': 'IYA', 
    'INGENIERIA ELECTRICA': 'IYA', 
    'INGENIERIA ELECTRICA + ING. ELECTRONICA INDUSTRIAL': 'IYA', 
    'INGENIERIA ELECTRICA + INGENIERIA ENERGETICA': 'IYA', 
    'INGENIERIA ELECTRICA + INGENIERIA MECANICA': 'IYA', 
    'INGENIERIA ELECTRONICA DE TELECOMUNICACION': 'IYA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL': 'IYA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL + INGENIERIA ELECTRICA': 'IYA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL + INGENIERIA MECANICA': 'IYA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL Y AUTOMATICA': 'IYA', 
    'INGENIERIA ELECTRONICA, ROBOTICA Y MECATRONICA': 'IYA', 
    'INGENIERIA EN DISENO INDUSTRIAL Y DESARROLLO DEL PRODUCTO': 'IYA', 
    'INGENIERIA EN EXPLOTACION DE MINAS Y RECURSOS ENERGETICOS': 'IYA', 
    'INGENIERIA EN RECURSOS ENERGETICOS + INGENIERIA EN QUIMICA INDUSTRIAL': 'IYA', 
    'INGENIERIA EN TECNOLOGIAS INDUSTRIALES': 'IYA', 
    'INGENIERIA EN TECNOLOGIAS INDUSTRIALES (PARS con el MAster en IngenierIa Industrial)': 'IYA', 
    'INGENIERIA ENERGETICA': 'IYA', 
    'INGENIERIA FORESTAL': 'IYA', 
    'INGENIERIA FORESTAL + INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL': 'IYA', 
    'INGENIERIA FORESTAL Y DEL MEDIO NATURAL': 'IYA', 
    'INGENIERIA GEOMATICA Y TOPOGRAFICA': 'IYA', 
    'INGENIERIA INFORMATICA': 'IYA', 
    'INGENIERIA INFORMATICA + ADMINISTRACION Y DIRECCION DE EMPRESAS': 'SIN', 
    'INGENIERIA INFORMATICA + MATEMATICAS': 'SIN', 
    'INGENIERIA INFORMATICA EN SISTEMAS DE INFORMACION': 'IYA', 
    'INGENIERIA INFORMATICA. INGENIERIA DE COMPUTADORES': 'IYA', 
    'INGENIERIA INFORMATICA. INGENIERIA DEL SOFTWARE': 'IYA', 
    'INGENIERIA INFORMATICA. INGENIERIA DEL SOFTWARE (GRUPO EN INGLES)': 'IYA', 
    'INGENIERIA INFORMATICA. TECNOLOGIA INFORMATICA': 'IYA', 
    'INGENIERIA INFORMATICA. TECNOLOGIA INFORMATICA + MATEMATICAS': 'SIN', 
    'INGENIERIA MECANICA': 'IYA', 
    'INGENIERIA MECANICA + INGENIERIA DE ORGANIZACION INDUSTRIAL': 'IYA', 
    'INGENIERIA MECANICA + INGENIERIA ELECTRICA': 'IYA', 
    'INGENIERIA MECANICA + INGENIERIA ELECTRONICA INDUSTRIAL Y AUTOMATICA': 'IYA', 
    'INGENIERIA MECANICA + INGENIERIA EN DISENO INDUSTRIAL Y DESARROLLO DEL PRODUCTO': 'IYA', 
    'INGENIERIA MECANICA + INGENIERIA EN EXPLOTACION DE MINAS Y RECURSOS ENERGETICOS': 'IYA', 
    'INGENIERIA QUIMICA': 'IYA', 
    'INGENIERIA QUIMICA + BIOTECNOLOGIA': 'SIN', 
    'INGENIERIA QUIMICA INDUSTRIAL': 'IYA', 
    'INGENIERIA RADIOELECTRONICA': 'IYA', 
    'INGENIERIA TELEMATICA': 'IYA', 
    'INGENIERIA TELEMATICA + INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION': 'IYA', 
    'LENGUA Y LITERATURA ALEMANAS': 'AYH', 
    'LENGUA Y LITERATURA ALEMANAS + EDUCACION PRIMARIA': 'SIN', 
    'LENGUAS MODERNAS Y SUS LITERATURAS': 'AYH', 
    'LINGÜISTICA Y LENGUAS APLICADAS': 'AYH', 
    'LINGÜISTICA Y LENGUAS APLICADAS + ESTUDIOS INGLESES': 'AYH', 
    'LITERATURAS COMPARADAS': 'AYH', 
    'LOGOPEDIA': 'SD', 
    'MARINA': 'IYA', 
    'MARKETING E INVESTIG. DE MERCADOS+TURISMO': 'SYJ', 
    'MARKETING E INVESTIGACION DE MERCADOS': 'SYJ', 
    'MATEMATICAS': 'C', 
    'MATEMATICAS + ESTADISTICA': 'C', 
    'MATEMATICAS + FISICA': 'C', 
    'MATEMATICAS + INGENIERIA INFORMATICA': 'SIN', 
    'MEDICINA': 'SD', 
    'NAUTICA Y TRANSPORTE MARITIMO': 'IYA', 
    'NUTRICION HUMANA Y DIETETICA': 'SD', 
    'NUTRICION HUMANA Y DIETETICA + CIENCIA Y TECNOLOGIA DE LOS ALIMENTOS': 'SIN', 
    'ODONTOLOGIA': 'SD', 
    'OPTICA Y OPTOMETRIA': 'C', 
    'PEDAGOGIA': 'SYJ', 
    'PERIODISMO': 'SYJ', 
    'PERIODISMO + COMUNICACION AUDIOVISUAL': 'SYJ', 
    'PODOLOGIA': 'SD', 
    'PSICOLOGIA': 'SD', 
    'PSICOLOGIA + LOGOPEDIA': 'SD', 
    'PUBLICIDAD Y RELACIONES PUBLICAS': 'SYJ',
    'PUBLICIDAD Y RELACIONES PUBLICAS + MARKETING E INVESTIGACION DE MERCADOS': 'SYJ', 
    'PUBLICIDAD Y RELACIONES PUBLICAS + TURISMO': 'SYJ', 
    'QUIMICA': 'C', 
    'QUIMICA + ENOLOGIA': 'C', 
    'QUIMICA + INGENIERIA DE MATERIALES': 'SIN', 
    'RELACIONES INTERNACIONALES': 'SYJ', 
    'RELACIONES INTERNACIONALES + CIENCIAS POLITICAS Y DE LA ADMINISTRACION': 'SYJ', 
    'RELACIONES INTERNACIONALES + DERECHO': 'SYJ', 
    'RELACIONES LABORALES Y RECURSOS HUMANOS': 'SYJ', 
    'RELACIONES LABORALES Y RECURSOS HUMANOS - SEMIPRESENCIAL': 'SYJ', 
    'SOCIOLOGIA': 'SYJ', 
    'SOCIOLOGIA + CIENCIAS POLITICAS Y DE LA ADMINISTRACION': 'SYJ', 
    'TERAPIA OCUPACIONAL': 'SD', 
    'TRABAJO SOCIAL': 'SYJ', 
    'TRABAJO SOCIAL + EDUCACION SOCIAL': 'SYJ', 
    'TRABAJO SOCIAL + SOCIOLOGIA': 'SYJ',
    'TRADUCCION E INTERPRETACION ALEMAN': 'AYH', 
    'TRADUCCION E INTERPRETACION ALEMAN + RELACIONES INTERNACIONALES': 'SIN', 
    'TRADUCCION E INTERPRETACION ALEMAN + TURISMO': 'SIN', 
    'TRADUCCION E INTERPRETACION ARABE': 'AYH', 
    'TRADUCCION E INTERPRETACION FRANCES': 'AYH', 
    'TRADUCCION E INTERPRETACION FRANCES + FILOLOGIA HISPANICA': 'AYH', 
    'TRADUCCION E INTERPRETACION FRANCES + RELACIONES INTERNACIONALES': 'SIN', 
    'TRADUCCION E INTERPRETACION FRANCES + TURISMO': 'SIN', 
    'TRADUCCION E INTERPRETACION INGLES': 'AYH', 
    'TRADUCCION E INTERPRETACION INGLES + ESTUDIOS INGLESES': 'AYH', 
    'TRADUCCION E INTERPRETACION INGLES + FILOLOGIA HISPANICA': 'AYH', 
    'TRADUCCION E INTERPRETACION INGLES + TURISMO': 'SIN', 
    'TURISMO': 'SYJ', 
    'TURISMO (GRUPO EN INGLES)': 'SYJ', 
    'TURISMO (ITINERARIO BILINGÜE)': 'SYJ', 
    'TURISMO + PUBLICIDAD Y RELACIONES PUBLICAS': 'SYJ', 
    'TURISMO + TRADUCCION E INTERPRETACION FRANCES': 'SIN', 
    'TURISMO + TRADUCCION E INTERPRETACION INGLES': 'SIN', 
    'VETERINARIA': 'SD'
}
const nombre_grados =[
    'ADMINISTRACION Y DIRECCION DE EMPRESAS',
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (GRUPO EN INGLES)',
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (grupo formaciOn en inglEs)', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS (grupo inglEs)', 'ADMINISTRACION Y DIRECCION DE EMPRESAS + DERECHO', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + DERECHO (grupo formaciOn bilingüe)', 
    'ADMINISTRACION Y DIRECCION DE EMPRESAS + FINANZAS Y CONTABILIDAD', 'ADMINISTRACION Y DIRECCION DE EMPRESAS + TURISMO', 
    'ANALISIS ECONOMICO', 'ANTROPOLOGIA SOCIAL Y CULTURAL', 
    'ARQUEOLOGIA', 
    'ARQUITECTURA NAVAL E INGENIERIA MARITIMA', 
    'BELLAS ARTES', 
    'BIOLOGIA', 
    'BIOMEDICINA BASICA Y EXPERIMENTAL', 
    'BIOQUIMICA', 
    'BIOTECNOLOGIA', 
    'CIBERSEGURIDAD E INTELIGENCIA ARTIFICIAL', 
    'CIENCIA Y TECNOLOGIA DE LOS ALIMENTOS', 
    'CIENCIAS AMBIENTALES', 
    'CIENCIAS AMBIENTALES + CIENCIAS DEL MAR', 
    'CIENCIAS AMBIENTALES + GEOGRAFIA E HISTORIA', 
    'CIENCIAS AMBIENTALES + INGENIERIA FORESTAL Y DEL MEDIO NATURAL', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE (ENSENANZA BILINGÜE)', 
    'CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE + EDUCACION PRIMARIA', 
    'CIENCIAS DEL MAR', 
    'CIENCIAS DEL MAR + CIENCIAS AMBIENTALES', 
    'CIENCIAS GASTRONOMICAS Y GESTION HOTELERA', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION (GR) + PERIODISMO (MA)', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION + DERECHO', 
    'CIENCIAS POLITICAS Y DE LA ADMINISTRACION + SOCIOLOGIA', 
    'CIENCIAS POLITITICAS Y DE LA ADMINISTRACION + DERECHO', 
    'CINE Y CULTURA', 
    'CINE Y CULTURA (modalidad no presencial)', 
    'COMUNICACION', 
    'COMUNICACION + COMUNICACION DIGITAL', 
    'COMUNICACION AUDIOVISUAL', 
    'COMUNICACION DIGITAL', 
    'CONSERVACION Y RESTAURACION DE BIENES CULTURALES', 
    'CRIMINOLOGIA', 
    'CRIMINOLOGIA Y SEGURIDAD', 
    'DERECHO', 
    'DERECHO + CIENCIAS POLITICAS Y DE LA ADMINISTRACION', 
    'DERECHO + CRIMINOLOGIA', 
    'DERECHO + CRIMINOLOGIA Y SEGURIDAD', 
    'DERECHO + ECONOMIA', 
    'DERECHO + FILOSOFIA', 
    'DERECHO + FINANZAS Y CONTABILIDAD', 
    'DERECHO + GESTION Y ADM. PUB.', 
    'DERECHO + RELACIONES LABORALES Y RECURSOS HUMANOS', 
    'DERECHO Y BACHELOR OF LAWS (UNIVERSIDAD DE BAYREUTH)', 
    'ECONOMIA', 
    'ECONOMIA + ADMINISTRACION Y DIRECCION EMPRESAS (FORMACION BILINGÜE)', 
    'ECONOMIA + MATEMATICAS', 
    'ECONOMIA BILINGÜE', 
    'EDIFICACION', 'EDIFICACION (antes Arquitectura TEcnica)', 
    'EDIFICACION + ADMINISTRACION Y DIRECCION DE EMPRESAS', 
    'EDUCACION INFANTIL', 
    'EDUCACION INFANTIL (ITINERARIO BILINGÜE)', 
    'EDUCACION INFANTIL + EDUCACION PRIMARIA', 
    'EDUCACION PRIMARIA', 'EDUCACION PRIMARIA (FORMACION BILINGÜE)', 
    'EDUCACION PRIMARIA (ITINERARIO BILINGÜE)', 
    'EDUCACION PRIMARIA (ITINERARIO BILINGÜE) + ESTUDIOS INGLESES', 
    'EDUCACION PRIMARIA (MENCION LENGUA EXTRANJERA-INGLES) + ESTUDIOS INGLESES', 
    'EDUCACION PRIMARIA + EDUCACION INFANTIL', 
    'EDUCACION PRIMARIA + ESTUDIOS FRANCESES', 
    'EDUCACION PRIMARIA + ESTUDIOS INGLESES', 
    'EDUCACION SOCIAL', 'ENFERMERIA', 
    'ENFERMERIA + FISIOTERAPIA', 
    'ENOLOGIA', 
    'ENOLOGIA + INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL', 
    'ESTADISTICA', 
    'ESTADISTICA Y EMPRESA', 
    'ESTUDIOS ARABES E ISLAMICOS', 
    'ESTUDIOS ARABES E ISLAMICOS + ESTUDIOS INGLESES', 
    'ESTUDIOS DE ARQUITECTURA', 
    'ESTUDIOS DE ASIA ORIENTAL', 
    'ESTUDIOS FRANCESES', 
    'ESTUDIOS FRANCESES + ESTUDIOS INGLESES', 
    'ESTUDIOS INGLESES', 
    'ESTUDIOS INGLESES + FILOLOGIA HISPANICA', 
    'ESTUDIOS TRANSCULTURALES EUROPEOS: LENGUAS, CULTURAS, INTERACCIONES', 
    'FARMACIA', 
    'FARMACIA + NUTRICION HUMANA Y DIETETICA', 
    'FARMACIA + OPTICA Y OPTOMETRIA', 
    'FILOLOGIA CLASICA', 
    'FILOLOGIA CLASICA + ESTUDIOS INGLESES', 
    'FILOLOGIA CLASICA + FILOLOGIA HISPANICA', 
    'FILOLOGIA HISPANICA', 
    'FILOLOGIA HISPANICA + ESTUDIOS INGLESES', 
    'FILOSOFIA', 
    'FINANZAS Y CONTABILIDAD', 
    'FINANZAS Y CONTABILIDAD (GRUPO EN INGLES)', 
    'FINANZAS Y CONTABILIDAD + ADMINISTRACION Y DIRECCION DE EMPRESAS', 
    'FINANZAS Y CONTABILIDAD + RELACIONES LABORALES Y RECURSOS HUMANOS', 
    'FISICA', 
    'FISICA + INGENIERIA DE MATERIALES', 
    'FISICA + MATEMATICAS', 
    'FISIOTERAPIA', 
    'FISIOTERAPIA + CIENCIAS DE LA ACTIVIDAD FISICA Y DEL DEPORTE', 
    'FUNDAMENTOS DE ARQUITECTURA', 
    'GEOGRAFIA E HISTORIA', 
    'GEOGRAFIA E HISTORIA + RELACIONES INTERNACIONALES', 
    'GEOGRAFIA Y GESTION DEL TERRITORIO', 
    'GEOGRAFIA Y GESTION DEL TERRITORIO + HISTORIA', 
    'GEOLOGIA', 
    'GEOLOGIA + CIENCIAS AMBIENTALES', 
    'GESTION CULTURAL', 
    'GESTION Y ADMINISTRACION PUBLICA', 
    'GRADO EN CIENCIAS POLITICAS Y DE LA ADMINISTRACION (GR) + PERIODISMO (MA)', 
    'HISTORIA', 
    'HISTORIA + HISTORIA DEL ARTE', 
    'HISTORIA + HUMANIDADES', 
    'HISTORIA DEL ARTE', 
    'HISTORIA Y CIENCIAS DE LA MUSICA', 
    'HUMANIDADES', 'HUMANIDADES + TRADUCCION E INTERPRETACION (INGLES)', 
    'INFORMACION Y DOCUMENTACION', 
    'INGENIERIA AEROESPACIAL', 
    'INGENIERIA AGRICOLA', 
    'INGENIERIA AGRICOLA (US) + CIENCIAS AMBIENTALES (UPO)', 
    'INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL', 
    'INGENIERIA CIVIL', 
    'INGENIERIA CIVIL (SEMIPRESENCIAL)', 
    'INGENIERIA CIVIL + ADMINISTRACION Y DIRECCION DE EMPRESAS', 
    'INGENIERIA CIVIL + INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES', 
    'INGENIERIA CIVIL + INGENIERIA EN TECNOLOGIAS MINERAS', 
    'INGENIERIA DE COMPUTADORES', 
    'INGENIERIA DE LA ENERGIA', 
    'INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES', 
    'INGENIERIA DE LA ENERGIA Y RECURSOS MINERALES + ING. ELECTRICA', 
    'INGENIERIA DE LA SALUD', 
    'INGENIERIA DE MATERIALES', 
    'INGENIERIA DE ORGANIZACION INDUSTRIAL', 
    'INGENIERIA DE RECURSOS ENERGETICOS', 
    'INGENIERIA DE SISTEMAS DE TELECOMUNICACION', 
    'INGENIERIA DE SISTEMAS ELECTRONICOS', 
    'INGENIERIA DE SOFTWARE', 
    'INGENIERIA DE SONIDO E IMAGEN', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION (PARS MAster en IngenierIa de TelecomunicaciOn)', 
    'INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION + MATEMATICAS', 
    'INGENIERIA DE TECNOLOGIAS MINERAS', 
    'INGENIERIA ELECTRICA', 
    'INGENIERIA ELECTRICA + ING. ELECTRONICA INDUSTRIAL', 
    'INGENIERIA ELECTRICA + INGENIERIA ENERGETICA', 
    'INGENIERIA ELECTRICA + INGENIERIA MECANICA', 
    'INGENIERIA ELECTRONICA DE TELECOMUNICACION', 
    'INGENIERIA ELECTRONICA INDUSTRIAL', 
    'INGENIERIA ELECTRONICA INDUSTRIAL + INGENIERIA ELECTRICA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL + INGENIERIA MECANICA', 
    'INGENIERIA ELECTRONICA INDUSTRIAL Y AUTOMATICA', 
    'INGENIERIA ELECTRONICA, ROBOTICA Y MECATRONICA', 
    'INGENIERIA EN DISENO INDUSTRIAL Y DESARROLLO DEL PRODUCTO', 
    'INGENIERIA EN EXPLOTACION DE MINAS Y RECURSOS ENERGETICOS', 
    'INGENIERIA EN RECURSOS ENERGETICOS + INGENIERIA EN QUIMICA INDUSTRIAL', 'INGENIERIA EN TECNOLOGIAS INDUSTRIALES', 
    'INGENIERIA EN TECNOLOGIAS INDUSTRIALES (PARS con el MAster en IngenierIa Industrial)', 
    'INGENIERIA ENERGETICA', 
    'INGENIERIA FORESTAL', 
    'INGENIERIA FORESTAL + INGENIERIA AGROALIMENTARIA Y DEL MEDIO RURAL', 
    'INGENIERIA FORESTAL Y DEL MEDIO NATURAL', 
    'INGENIERIA GEOMATICA Y TOPOGRAFICA', 
    'INGENIERIA INFORMATICA', 
    'INGENIERIA INFORMATICA + ADMINISTRACION Y DIRECCION DE EMPRESAS', 
    'INGENIERIA INFORMATICA + MATEMATICAS', 
    'INGENIERIA INFORMATICA EN SISTEMAS DE INFORMACION', 
    'INGENIERIA INFORMATICA. INGENIERIA DE COMPUTADORES', 
    'INGENIERIA INFORMATICA. INGENIERIA DEL SOFTWARE', 
    'INGENIERIA INFORMATICA. INGENIERIA DEL SOFTWARE (GRUPO EN INGLES)', 
    'INGENIERIA INFORMATICA. TECNOLOGIA INFORMATICA', 
    'INGENIERIA INFORMATICA. TECNOLOGIA INFORMATICA + MATEMATICAS', 
    'INGENIERIA MECANICA', 
    'INGENIERIA MECANICA + INGENIERIA DE ORGANIZACION INDUSTRIAL', 
    'INGENIERIA MECANICA + INGENIERIA ELECTRICA', 
    'INGENIERIA MECANICA + INGENIERIA ELECTRONICA INDUSTRIAL Y AUTOMATICA', 
    'INGENIERIA MECANICA + INGENIERIA EN DISENO INDUSTRIAL Y DESARROLLO DEL PRODUCTO', 
    'INGENIERIA MECANICA + INGENIERIA EN EXPLOTACION DE MINAS Y RECURSOS ENERGETICOS', 
    'INGENIERIA QUIMICA', 
    'INGENIERIA QUIMICA + BIOTECNOLOGIA',
    'INGENIERIA QUIMICA INDUSTRIAL', 
    'INGENIERIA RADIOELECTRONICA', 
    'INGENIERIA TELEMATICA', 
    'INGENIERIA TELEMATICA + INGENIERIA DE TECNOLOGIAS DE TELECOMUNICACION', 
    'LENGUA Y LITERATURA ALEMANAS', 
    'LENGUA Y LITERATURA ALEMANAS + EDUCACION PRIMARIA', 
    'LENGUAS MODERNAS Y SUS LITERATURAS', 
    'LINGÜISTICA Y LENGUAS APLICADAS', 
    'LINGÜISTICA Y LENGUAS APLICADAS + ESTUDIOS INGLESES', 
    'LITERATURAS COMPARADAS', 
    'LOGOPEDIA', 
    'MARINA', 
    'MARKETING E INVESTIG. DE MERCADOS+TURISMO', 
    'MARKETING E INVESTIGACION DE MERCADOS', 
    'MATEMATICAS', 
    'MATEMATICAS + ESTADISTICA', 
    'MATEMATICAS + FISICA', 
    'MATEMATICAS + INGENIERIA INFORMATICA',
    'MEDICINA',
    'NAUTICA Y TRANSPORTE MARITIMO', 
    'NUTRICION HUMANA Y DIETETICA', 
    'NUTRICION HUMANA Y DIETETICA + CIENCIA Y TECNOLOGIA DE LOS ALIMENTOS', 
    'ODONTOLOGIA', 
    'OPTICA Y OPTOMETRIA', 
    'PEDAGOGIA', 
    'PERIODISMO', 
    'PERIODISMO + COMUNICACION AUDIOVISUAL', 
    'PODOLOGIA', 
    'PSICOLOGIA', 
    'PSICOLOGIA + LOGOPEDIA', 
    'PUBLICIDAD Y RELACIONES PUBLICAS', 
    'PUBLICIDAD Y RELACIONES PUBLICAS + MARKETING E INVESTIGACION DE MERCADOS', 
    'PUBLICIDAD Y RELACIONES PUBLICAS + TURISMO', 
    'QUIMICA', 
    'QUIMICA + ENOLOGIA', 
    'QUIMICA + INGENIERIA DE MATERIALES', 
    'RELACIONES INTERNACIONALES', 
    'RELACIONES INTERNACIONALES + CIENCIAS POLITICAS Y DE LA ADMINISTRACION', 
    'RELACIONES INTERNACIONALES + DERECHO', 
    'RELACIONES LABORALES Y RECURSOS HUMANOS', 
    'RELACIONES LABORALES Y RECURSOS HUMANOS - SEMIPRESENCIAL', 
    'SOCIOLOGIA', 
    'SOCIOLOGIA + CIENCIAS POLITICAS Y DE LA ADMINISTRACION', 
    'TERAPIA OCUPACIONAL', 
    'TRABAJO SOCIAL', 
    'TRABAJO SOCIAL + EDUCACION SOCIAL', 
    'TRABAJO SOCIAL + SOCIOLOGIA', 
    'TRADUCCION E INTERPRETACION ALEMAN', 
    'TRADUCCION E INTERPRETACION ALEMAN + RELACIONES INTERNACIONALES', 'TRADUCCION E INTERPRETACION ALEMAN + TURISMO', 
    'TRADUCCION E INTERPRETACION ARABE', 
    'TRADUCCION E INTERPRETACION FRANCES', 
    'TRADUCCION E INTERPRETACION FRANCES + FILOLOGIA HISPANICA', 
    'TRADUCCION E INTERPRETACION FRANCES + RELACIONES INTERNACIONALES', 'TRADUCCION E INTERPRETACION FRANCES + TURISMO', 
    'TRADUCCION E INTERPRETACION INGLES', 
    'TRADUCCION E INTERPRETACION INGLES + ESTUDIOS INGLESES', 
    'TRADUCCION E INTERPRETACION INGLES + FILOLOGIA HISPANICA', 
    'TRADUCCION E INTERPRETACION INGLES + TURISMO', 
    'TURISMO', 
    'TURISMO (GRUPO EN INGLES)', 
    'TURISMO (ITINERARIO BILINGÜE)', 
    'TURISMO + PUBLICIDAD Y RELACIONES PUBLICAS', 
    'TURISMO + TRADUCCION E INTERPRETACION FRANCES', 
    'TURISMO + TRADUCCION E INTERPRETACION INGLES', 
    'VETERINARIA'
]

document.addEventListener('DOMContentLoaded', () => {
    let grado = document.getElementById("nombre_grado");

    grado.addEventListener("keyup", ()=>{
        for(let i of nombre_grados)
            if(i===nombre_grados){
                console.log("si");
            }
            else{
                console.log("no")
            }
    })
})