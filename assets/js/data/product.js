const productsData = [
    {
        "id": "higiene",
        "category": "filtros",
        "modalId": "modal-higiene",
        "image": "/assets/images/products/higiene-limpieza.png",
        "title": "Higiene y desinfección",
        "description": "Productos que marcan la diferencia para asegurar a nuestros clientes la eficiencia en sus procesos de higienización, con el acostumbrado soporte técnico y valores agregados que nos caracterizan.",
        "categoriesCount": 5,
        "fullDescription": "Nuestros productos que marcan la diferencia para asegurar a nuestros clientes la eficiencia en sus procesos de higienización, con el acostumbrado soporte técnico y valores agregados que nos caracterizan.",
        "productLines": [
            {
                "name": "Detergentes",
                "color": "blue",
                "products": ["Líquidos", "Neutros", "Alcalinos", "Ácidos"]
            },
            {
                "name": "Limpiadores concentrados",
                "color": "green",
                "products": ["Neutros", "Alcalinos", "Ácidos", "Superficies"]
            },
            {
                "name": "Desengrasantes",
                "color": "blue",
                "products": ["Base agua", "Base solvente"]
            },
            {
                "name": "Desinfección",
                "color": "green",
                "products": ["Desinfectantes", "Microbiocidas"]
            },
            {
                "name": "Cuidado personal",
                "color": "blue",
                "products": ["Jabón líquido", "Jabón antibacterial", "Gel alcoholado"]
            }
        ],
        "presentations": [
            { "name": "Galones", "capacity": "4L", "icon": "gallon" },
            { "name": "Pailas", "capacity": "20L", "icon": "paila" },
            { "name": "Carboyas", "capacity": "50L", "icon": "carboya" },
            { "name": "Tambores", "capacity": "200L", "icon": "tambor" }
        ]
    },
    {
        "id": "calderas",
        "category": "calderas",
        "modalId": "modal-calderas",
        "image": "/assets/images/products/tratamiento-agua-caldera.png",
        "title": "Tratamiento de agua para calderas",
        "description": "Previene incrustaciones y corrosión en sistemas de generación de vapor, ahorrando energía y extendiendo la vida útil del equipo.",
        "categoriesCount": 2,
        "fullDescription": "Los objetivos básicos del tratamiento de aguas de un sistema de generación de vapor (Calderas e intercambiadores de calor) son prevenir las incrustaciones y la corrosión.",
        "benefits": [
            "Ahorro de energía significativo",
            "Cero limpiezas químicas",
            "Mayor vida útil del equipo",
            "Reducción de costos de mantenimiento"
        ],
        "productLines": [
            {
                "name": "Tratamiento calderas",
                "color": "blue",
                "products": ["Inhibidor de incrustación", "Inhibidor de corrosión", "Multifuncionales"]
            },
            {
                "name": "Tratamiento de condensado",
                "color": "green",
                "products": ["Inhibidor de corrosión"]
            }
        ],
        "presentations": [
            { "name": "Pailas", "capacity": "20L", "icon": "paila" },
            { "name": "Carboyas", "capacity": "50L", "icon": "carboya" },
            { "name": "Tambores", "capacity": "200L", "icon": "tambor" }
        ]
    },
    {
        "id": "enfriamiento",
        "category": "enfriamiento",
        "modalId": "modal-enfriamiento",
        "image": "/assets/images/products/tratamiento-agua-enfriamiento.png",
        "title": "Tratamiento de agua enfriamiento",
        "description": "Los sistemas de enfriamiento con agua son muy comunes en las industrias y sistemas de aire acondicionado, ya que la capacidad de enfriamiento es muy alta y el agua es un recurso económico.",
        "categoriesCount": 2,
        "fullDescription": "Los sistemas de enfriamiento con agua, son muy comunes en las industrias y sistemas de aire acondicionado, ya que la capacidad de enfriamiento es muy alta y el agua es un recurso económico pero que trae asociado algunos problemas. En este tipo de sistema es necesario controlar la corrosión, incrustaciones y el crecimiento de algas y otros microorganismos.",
        "benefits": [
            "Alta tasa de transferencia de calor",
            "Ahorro de energía eléctrica",
            "Mayor vida útil del equipo",
            "Reducción de horas hombre de mantenimiento",
            "Mayor duración del material de empaque de la torre",
            "Reducción de costos de oportunidad"
        ],
        "productLines": [
            {
                "name": "Aditivos para tratamientos de agua",
                "color": "blue",
                "products": ["Inhibidor de incrustación", "Inhibidor de corrosión", "Multifuncional", "Anticongelante"]
            },
            {
                "name": "Control biológico",
                "color": "green",
                "products": ["Biocida"]
            }
        ],
        "presentations": [
            { "name": "Pailas", "capacity": "20L", "icon": "paila" },
            { "name": "Carboyas", "capacity": "50L", "icon": "carboya" },
            { "name": "Tambores", "capacity": "200L", "icon": "tambor" }
        ]
    },
    {
        "id": "efluentes",
        "category": "efluentes",
        "modalId": "modal-efluentes",
        "image": "/assets/images/products/tratamiento-efluentes.png",
        "title": "Tratamiento de efluentes",
        "description": "La preservación del ambiente es de vital importancia para la sociedad y las industrias. Las plantas de tratamiento son instalaciones de vital importancia en la productividad de la empresa.",
        "categoriesCount": 5,
        "fullDescription": "La preservación del ambiente es de vital importancia para la sociedad y las industrias. Las plantas de tratamiento son instalaciones de vital importancia en la productividad de la empresa, representa un costo necesario que requiere ser controlado, a fin de mantener su competitividad.",
        "benefits": [
            "Preservación del medio ambiente",
            "Control de costos operativos",
            "Cumplimiento de normativas ambientales",
            "Optimización de procesos de tratamiento",
            "Monitoreo continuo de calidad del agua",
            "Asesoría especializada incluida"
        ],
        "productLines": [
            {
                "name": "Coagulantes",
                "color": "blue",
                "products": ["Coagulantes inorgánicos"]
            },
            {
                "name": "Floculación",
                "color": "green",
                "products": ["Floculante catiónico", "Floculante aniónico"]
            },
            {
                "name": "Desinfectantes",
                "color": "blue",
                "products": ["Cloro", "Lámpara UV"]
            },
            {
                "name": "Acondicionamiento",
                "color": "green",
                "products": ["Lodos", "pH"]
            },
            {
                "name": "Monitoreo y asesoría",
                "color": "blue",
                "products": ["Equipos de monitoreo de calidad", "Acompañamiento técnico", "Asesoría en clarificación"]
            }
        ],
        "presentations": [
            { "name": "Pailas", "capacity": "20L", "icon": "paila" },
            { "name": "Carboyas", "capacity": "50L", "icon": "carboya" },
            { "name": "Tambores", "capacity": "200L", "icon": "tambor" }
        ]
    },
    {
        "id": "filtracion-ablandamiento",
        "category": "filtracion",
        "modalId": "modal-filtracion",
        "image": "/assets/images/products/equipo-filtracion.png",
        "title": "Equipos para filtración y ablandamiento de agua",
        "description": "El agua es vida, el agua es salud. Para su uso doméstico e industrial, es necesario que sea tratada adecuadamente a fin de evitar problemas asociados al agua.",
        "categoriesCount": 5,
        "fullDescription": "El agua es vida, el agua es salud. Sin embargo, para su uso doméstico e industrial, es necesario que sea tratada adecuadamente a fin de evitar los diferentes problemas asociados al agua como: sólidos suspendidos, lodo o barro, microorganismos, hierro, dureza, exceso de cloro, materia orgánica (origen de olores y sabores), entre otros. Esto genera problemas rutinarios tales como: desvío en la calidad de productos terminados, deterioro de la salud, taponamientos de tuberías y equipos, daños de empacaduras de accesorios, manchado de equipos, utensilios, baños y lavamanos, fallas en calentadores de aguas, baño maría, calderas, torres de enfriamiento y muchos otros más.",
        "benefits": [
            "Agua de calidad para su empresa",
            "Eliminación de exceso de cloro y materia orgánica",
            "Prevención de taponamientos en tuberías",
            "Protección de equipos y accesorios",
            "Agua libre de olores y sabores",
            "Mayor vida útil de calderas y equipos de enfriamientos",
            "Soluciones personalizadas a la medida"
        ],
        "productLines": [
            {
                "name": "Equipos de filtración",
                "color": "blue",
                "products": ["Filtros desbarradores", "Filtros purificadores"]
            },
            {
                "name": "Ablandador de agua",
                "color": "green",
                "products": ["Suavizador con válvula manual", "Suavizador con válvula automática"]
            },
            {
                "name": "Lechos de filtración",
                "color": "blue",
                "products": ["Resina catiónica", "Resina aniónica", "Lechos soporte", "Arenas para filtración"]
            },
            {
                "name": "Mantenimiento y servicios",
                "color": "green",
                "products": ["Mantenimiento de tanques", "Cambios de lechos de filtros", "Cambios de lechos suavizadores", "Tanques personalizados"]
            }
        ],
        "presentations": [
        ]
    },
    {
        "id": "laboratorio-analisis",
        "category": "laboratorio",
        "modalId": "modal-laboratorio",
        "image": "/assets/images/products/equipos-laboratorios.png",
        "title": "Equipos de laboratorio y kit de análisis",
        "description": "Realizar el seguimiento de los tratamientos físico químicos en los diferentes procesos donde los productos de TRATHAL son aplicados es de vital importancia.",
        "categoriesCount": 3,
        "fullDescription": "Realizar el seguimiento de los tratamientos físico químicos en los diferentes procesos donde los productos de TRATHAL son aplicados es de vital importancia, por lo que ofrecemos a la industria venezolana kit y equipos de análisis para realizar las determinaciones de calidad y puedan controlar y cumplir con los estándares de los diferentes procesos. Brindamos la asesoría necesaria y trabajamos con marcas reconocidas en equipos de análisis, monitoreo y equipos de dosificación.",
        "benefits": [
            "Control de calidad en tiempo real",
            "Cumplimiento de estándares de proceso",
            "Asesoría técnica especializada",
            "Equipos de marcas reconocidas",
            "Monitoreo continuo de parámetros",
            "Optimización de tratamientos físico-químicos"
        ],
        "productLines": [
            {
                "name": "Kit de análisis",
                "color": "blue",
                "products": [
                    "Dureza",
                    "Hierro total",
                    "Cloro libre",
                    "Cloro total",
                    "Nitritos",
                    "Fosfatos",
                    "Alcalinidad total",
                    "pH",
                    "TDS",
                ]
            },
            {
                "name": "Controladores en línea",
                "color": "green",
                "products": [
                    "pH",
                    "Cloro",
                ]
            },
            {
                "name": "Bombas dosificadoras",
                "color": "blue",
                "products": [
                    "Según su requerimiento",
                ]
            }
        ],
        "presentations": [
        ]
    },
    {
        "id": "aditivos-pintura",
        "category": "pintura",
        "modalId": "modal-pintura",
        "image": "/assets/images/products/aditivos-pintura.png",
        "title": "Aditivos de pintura",
        "description": "TRATHAL ofrece a la industria venezolana aditivos especiales para la fabricación de pinturas emulsionadas, látex, adhesivos y otros recubrimientos industriales.",
        "categoriesCount": 4,
        "fullDescription": "TRATHAL ofrece a la industria venezolana aditivos especiales para la fabricación de pinturas emulsionadas, látex, adhesivos y otros recubrimientos industriales, que mejoran su calidad con una excelente relación costo-rendimiento porque trabaja a dosis más bajas que otros productos de su tipo.",
        "benefits": [
            "Excelente relación costo-rendimiento",
            "Dosis más bajas que productos similares",
            "Mejora la calidad de pinturas y adhesivos",
            "Aplicable en diversos recubrimientos industriales",
            "Optimización de procesos de fabricación",
            "Mayor eficiencia en la producción"
        ],
        "productLines": [
            {
                "name": "Control de espuma",
                "color": "blue",
                "products": ["Anti espumantes"]
            },
            {
                "name": "Dispersión y humectación",
                "color": "green",
                "products": ["Dispersantes", "Humectantes"]
            },
            {
                "name": "Control de pH",
                "color": "blue",
                "products": ["Controlador de pH"]
            },
            {
                "name": "Materias primas",
                "color": "green",
                "products": ["Otras materias primas para la industria"]
            }
        ],
        "presentations": [
            { "name": "Pailas", "capacity": "20L", "icon": "paila" },
            { "name": "Carboyas", "capacity": "50L", "icon": "carboya" },
            { "name": "Tambores", "capacity": "200L", "icon": "tambor" }
        ]
    }
]