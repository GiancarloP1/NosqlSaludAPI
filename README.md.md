
# Documentación de la API de Monitoreo de Salud

Esta API permite gestionar y monitorear la salud de los usuarios mediante la creación de usuarios, registro de consultas médicas, signos vitales, historial de medicamentos y alertas de salud.

## Endpoints de la API

### 1. Crear un Usuario

- **URL**: `POST /api/users`
- **Descripción**: Crea un nuevo usuario en el sistema.
- **JSON de solicitud**:

  ```json
  {
    "nombre": "Juan Pérez",
    "edad": 45,
    "genero": "masculino",
    "contacto": {
      "telefono": "555-1234",
      "email": "juan.perez@example.com"
    },
    "direccion": {
      "calle": "Calle Falsa 123",
      "ciudad": "Ciudad XYZ",
      "codigo_postal": "12345"
    },
    "consultas_medicas": [],
    "signos_vitales": [],
    "historial_medicamentos": [],
    "alertas_salud": []
  }
  ```

---

### 2. Obtener Datos Históricos de Signos Vitales

- **URL**: `GET /api/users/:userId/historical?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- **Descripción**: Devuelve los registros de signos vitales de un usuario entre dos fechas.
- **Parámetros**:
  - `userId`: ID del usuario.
  - `startDate`: Fecha de inicio en formato `YYYY-MM-DD`.
  - `endDate`: Fecha de fin en formato `YYYY-MM-DD`.
- **Ejemplo de llamada**:
  ```
  GET /api/users/64c6b4f5e9b9b2b4d8d2f94c/historical?startDate=2023-01-01&endDate=2023-12-31
  ```

---

### 3. Añadir una Consulta Médica

- **URL**: `POST /api/users/:userId/consultations`
- **Descripción**: Registra una nueva consulta médica para el usuario.
- **JSON de solicitud**:

  ```json
  {
    "fecha_consulta": "2024-09-25",
    "doctor": {
      "nombre": "Dra. Ana García",
      "especialidad": "Cardiología",
      "numero_licencia": "1234567890"
    },
    "sintomas": "Dolor en el pecho, mareos",
    "diagnostico": "Posible angina de pecho",
    "tratamiento": "Reposo y observación"
  }
  ```

---

### 4. Añadir un Registro de Signos Vitales

- **URL**: `POST /api/users/:userId/vital-signs`
- **Descripción**: Agrega un registro de signos vitales para el usuario.
- **JSON de solicitud**:

  ```json
  {
    "fecha": "2024-09-25",
    "frecuencia_cardiaca": 80,
    "presion_arterial": {
      "sistolica": 120,
      "diastolica": 80
    },
    "temperatura_corporal": 36.5,
    "nivel_oxigeno": 98
  }
  ```

---

### 5. Añadir un Historial de Medicamentos

- **URL**: `POST /api/users/:userId/medications`
- **Descripción**: Registra un nuevo medicamento en el historial de medicamentos del usuario.
- **JSON de solicitud**:

  ```json
  {
    "nombre_medicamento": "Metformina",
    "dosis": "500 mg",
    "frecuencia": "Dos veces al día",
    "fecha_inicio": "2024-01-01",
    "fecha_fin": null
  }
  ```

---

### 6. Añadir una Alerta de Salud

- **URL**: `POST /api/users/:userId/health-alerts`
- **Descripción**: Agrega una alerta de salud para el usuario.
- **JSON de solicitud**:

  ```json
  {
    "fecha_alerta": "2024-09-25",
    "tipo_alerta": "Alta presión arterial",
    "descripcion": "La presión arterial supera los 140/90 mmHg",
    "accion_recomendada": "Visitar al médico de inmediato"
  }
  ```

---

## Resumen de Endpoints

| Método | Endpoint                                  | Descripción                                         |
|--------|-------------------------------------------|-----------------------------------------------------|
| POST   | `/api/users`                              | Crea un nuevo usuario                               |
| GET    | `/api/users/:userId/historical`           | Obtiene datos históricos de signos vitales          |
| POST   | `/api/users/:userId/consultations`        | Añade una consulta médica                           |
| POST   | `/api/users/:userId/vital-signs`          | Añade un registro de signos vitales                 |
| POST   | `/api/users/:userId/medications`          | Añade un historial de medicamentos                  |
| POST   | `/api/users/:userId/health-alerts`        | Añade una alerta de salud                           |

---

Este documento debería cubrir todos los endpoints y proporcionar los ejemplos de JSON necesarios para probar cada funcionalidad de la API de monitoreo de salud.
