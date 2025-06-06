
# 🏉 Rugby League Manager - Frontend (Angular 19 + Signals)

Este proyecto es el frontend de **Rugby League Manager**, una plataforma profesional para la gestión de ligas de rugby en Chile y Latinoamérica. Desarrollado con Angular 19, Signals, SSR y Angular Material (tema Cyan/Orange), siguiendo las mejores prácticas modernas.

---

## ✅ Objetivos del Proyecto

- UI limpia, rápida y modular.
- Arquitectura escalable alineada con el backend NestJS.
- Soporte para autenticación con JWT y control de roles.
- Reactividad moderna usando Angular **Signals**.
- Internacionalización desde el inicio.
- Código fácilmente testeable y mantenible.

---

## 📁 Estructura Base

```bash
src/
├── app/
│   ├── core/            # Servicios singleton, guards, interceptores (AuthService, JwtInterceptor, etc.)
│   ├── shared/          # Componentes reutilizables, pipes, directivas (SharedModule)
│   ├── features/        # Módulos funcionales: leagues, players, teams...
│   │   ├── leagues/
│   │   │   ├── leagues.module.ts
│   │   │   ├── leagues-routing.module.ts
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   └── models/
│   ├── app.config.ts    # Configuración standalone
│   └── app.routes.ts    # Lazy loading de features
├── assets/
├── environments/
├── main.ts
└── styles.css
```

---

## 🔐 Autenticación y Seguridad

- `AuthService`: Login, logout, token storage (JWT).
- `AuthGuard` + `RoleGuard`: Protección de rutas.
- `HttpInterceptor`: Adjunta JWT y maneja errores globales.

---

## 🌍 Internacionalización

- Soporte con `@angular/localize` o `ngx-translate`.
- Archivos de traducción modulares por sección.

---

## 🧪 Testing

- `Karma + Jasmine` para pruebas unitarias.
- `TestBed` para simular servicios y componentes.
- Mocking coherente con el backend (similar a Jest).

---

## ⚡ Reactividad Moderna: Signals

- Uso de `signal()`, `computed()`, `effect()` para manejar estado local.
- Conversión de Observables a Signals con `toSignal()` o `fromObservable()`.

---

## 🎨 Estilos con Angular Material

Utilizamos [Angular Material](https://material.angular.dev/?theme=cyan-orange) con el tema **Cyan/Orange**:

- Componentes accesibles (`MatTable`, `MatButton`, `MatSnackBar`, etc.)
- Temas y tipografía responsiva.
- Estilo profesional y consistente.

---

## 📦 Servicios desacoplados y tipados

Todos los servicios consumen la API REST desde `environment.apiUrl` y devuelven modelos tipados definidos en `models/*.ts`.

```ts
getLeagues(): Observable<League[]> {
  return this.http.get<League[]>(`${environment.apiUrl}/leagues`);
}
```

---

## 📑 Formularios coherentes con el backend

- Formularios reactivos (`FormGroup`) basados en DTOs del backend.
- Validaciones sincronizadas frontend/backend.

---

## ⚠️ Manejo de errores

- Interceptor global para errores comunes (`401`, `403`, `409`).
- Notificaciones mediante `MatSnackBar`.
- Traducción de mensajes en internacionalización.

---

## 🔐 Roles y permisos

- `AuthGuard` y `RoleGuard` protegen rutas según rol (`admin`, `user`, etc.).
- Ocultamiento condicional de botones y menús.

---

## 🧩 Componentes reutilizables

- Componentes independientes (`league-card`, `player-form`, etc.).
- Comunicación clara entre padres e hijos (`@Input()` / `@Output()`).

---

## 📚 Tipado estricto y mantenimiento

- `strict` en `tsconfig.json`.
- Modelos de entidades en `models/`.
- `ApiResponse<T>` genérico para listas paginadas.

---

## 🔄 Otras buenas prácticas

- `trackBy` en `*ngFor`.
- `takeUntil()` en flujos RxJS.
- Responsabilidad única por componente.
- Uso explícito de imports en `standalone components`.

---

## 🚀 Comandos útiles

```bash
npm start          # Servidor de desarrollo
npm run build      # Compilación de producción
npm run test       # Ejecutar pruebas unitarias
```

---

## 📅 Roadmap Inicial

- [x] Instalar Angular Material (tema Cyan/Orange)
- [x] Crear componente de prueba con `MatButton` y `MatSnackBar`
- [ ] Crear estructura `core/` y `shared/`
- [ ] Implementar `AuthService` con Signals
- [ ] Crear módulo `leagues` funcional con tabla y formulario
- [ ] Proteger rutas según rol
- [ ] Agregar internacionalización (`i18n`)

---

## 🧠 ¿Por qué Angular + Signals + Material?

| Tecnología        | Ventaja clave                                       |
|-------------------|-----------------------------------------------------|
| Angular 19        | Madurez, escalabilidad, SSR, soporte a largo plazo |
| Signals           | Reactividad más simple y eficiente                 |
| Angular Material  | UI profesional, accesible y altamente integrable   |

---

_Última actualización: 2025-06-06_
