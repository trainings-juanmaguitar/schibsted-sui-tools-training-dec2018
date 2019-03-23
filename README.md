# Training SUI - Skylab (Dic 2018)

## Calendario del Curso

Sesiones de 3h y media al día (horario de 14:00 a 17:30). En total, 35h de formación repartidas en 10 sesiones
El lugar para realizar la formación → el aula de Skylab Coders

El calendario en el que se realizó el training fue::

**_Semana 1_** (Teoría)
- Lunes 10 Diciembre (de 14:00 a 17:30)
- Martes 11 Diciembre (de 14:00 a 17:30)
- Miércoles 12 Diciembre (de 14:00 a 17:30)
- Jueves 13 Diciembre (de 14:00 a 17:30)
- Viernes 14 Diciembre (de 14:00 a 17:30)

**_Semana 2_** (Práctica)
- Lunes 17 Diciembre (de 14:00 a 17:30)
- Martes 18 Diciembre (de 14:00 a 17:30)
- Miércoles 19 Diciembre (de 14:00 a 17:30)
- Jueves 20 Diciembre (de 14:00 a 17:30)
- Viernes 21 Diciembre (de 14:00 a 17:30)

## Organización del repo

```
- .
├── staff
│   ├── ... 👈 carpetas alumnos
│   ├── juanma-garrido 👈 carpeta del profe (ejercicios hechos en clase)
└── stuff
    ├── demos  👈 demos preparadas para el training
    ├── docs 👈 documentación preparada para reforzar la doc oficial de SUI
    ├── examples
    ├── frontend-all--pet-project 👈 enunciados pet-project
    └── slides 👈 slides preparadas para el curso
```


## Sesiones del Curso

📄 [Slides](https://gitpitch.com/trainings-juanmaguitar/schibsted-sui-tools-training/devel#/)

### Semana 1 

#### 📅 Sesion 1 - Lunes 10 Diciembre

- ¿Por qué [`sui-tools`](https://github.com/SUI-Components/sui) y [`sui-components`](https://github.com/SUI-Components/sui-components)?
- Necesidades equipos grandes y proyectos larga duración

**_SUI-Tools_**

- Simplificar el proceso de crear SPA's y SSR's → [`sui-bundler`](https://github.com/SUI-Components/sui/blob/master/packages/sui-bundler)

- Unificar convenciones de equipo
  - [`babel-preset-sui`](https://github.com/SUI-Components/sui/blob/master/packages/babel-preset-sui) → ESNext
  - [`sui-lint`](https://github.com/SUI-Components/sui/blob/master/packages/sui-lint) → standard código, formato
  - [`sui-mono`](https://github.com/SUI-Components/sui/blob/master/packages/sui-mono) → mensajes commits, deployments 
  - [`sui-component-peer-dependencies`](https://github.com/SUI-Components/sui/blob/master/packages/sui-component-peer-dependencies/README.md) → unificar dependencias proyectos


#### 📅 Sesion 2 - Martes 11 Diciembre

- [Apps offline con `sui-bundler`](https://github.com/SUI-Components/sui/tree/master/packages/sui-bundler#offline) 

- 👉 [sui-bundler Demo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/juanma-garrido/sui-bundler-demo)

[**__DDD__**](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/README.md) 

1. [Definition and Motivation](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/1-Definition-and-motivation.md)
2. [Concepts](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/2-Concepts.md)
3. [Folder-structure](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/3-Folder-structure.md)
4. [Remain-work](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/4-Remain-work.md)

- [Aggregates of entities or value objects manipulation](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/DOMAIN/__manipulate-aggregates.md)
- [ValueObjects and Entities observations](__ValueObjects-and-Entities-observations.md)

- 👉 [domain Demo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/juanma-garrido/domain-demo)

##### 📅 Sesion 3 - Miércoles 12 Diciembre

More DDD

- 👉 [RAW Live Coding Demo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/demos/rawlive-coding-demo)

- 👉 [Domain Demo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/demos/domain-demo)




#### 📅 Sesion 4 - Jueves 13 Diciembre

Routing en Web App

- 👉 [Routing Demo 1](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/demos/sui-bundler-demo-pro-routes-context)

- 👉 [Routing Demo 1](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/demos/sui-bundler-demo-pro-routes-context)


#### 📅 Sesion 5 - Viernes 14 Diciembre

- [sui-components](https://github.com/SUI-Components/sui-components) como primera opción de componentes
- custom components del proyecto se crean aparte utlizando el `sui-studio` tal y cómo se explica [aqui](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/docs/SUI-STUDIO.md)


### Semana 2

Esta semana se dedicó exclusivamente a que trabajaran el pet project tal y cómo se propone aquí:

[The Pet Project](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/frontend-all--pet-project/README.md)
- [1-frontend-mv--uilib-theme](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/frontend-all--pet-project/1-frontend-mv--uilib-theme/README.md)
- [2-frontend-mv--uilib-components](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/frontend-all--pet-project/2-frontend-mv--uilib-components/README.md)
- [3-frontend-mv--lib-movies](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/frontend-all--pet-project/3-frontend-mv--lib-movies/README.md)
- [4-frontend-mv--web-app](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/frontend-all--pet-project/4-frontend-mv--web-app/README.md)

Algunas implementaciones del pet project realizadas en el curso fueron:

- La versión del **profesor** → con gestión de favoritos y logs acciones
  - 📄 [Repo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/stuff/demos/schibsted-frontend-mv-project/README.md) 
  - 🌍 [Demo Online](https://20190116-1547675909-spa-mock-production-tqwqacidkh.now.sh/)

- La versión de **alumnos**: 
  - _Maryam_ → 📄 [Repo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/maryam-malek/frontend-all--pet-project) 
  - _Ana_ → 📄 [Repo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/ana-sanjuan/frontend-all--pet-project) 
  - _Francisco_ → 📄 [Repo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/francisco-fernandez/frontend-all--pet-project) 
  - _Henry_ → 📄 [Repo](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/henry-novoa/frontend-all--pet-project) 

👉 Extra: en la última sesión hicimos un proyecto completo desde cero (con dominio y web app) → [**from the ground project**](https://github.com/trainings-juanmaguitar/schibsted-sui-tools-training/blob/devel/staff/juanma-garrido/from-the-ground-project)