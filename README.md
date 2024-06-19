Endpoints

Endpoints Agencias

GET /api/v1/agencias
    Obtiene todas las agencias con sus destinos asociados.
    
GET /api/v1/agencias/
    Obtiene una agencia específica por su ID con sus destinos asociados.
    
POST /api/v1/agencias
    Crea una nueva agencia.
    
PUT /api/v1/agencias/
    Actualiza una agencia existente. Permite actualizar campos básicos y añadir nuevos destinos sin eliminar los existentes.
    
DELETE /api/v1/agencias/
    Elimina una agencia por su ID. Los destinos asociados no se eliminan.
    
Endpoints Destinos

GET /api/v1/destinos
    Obtiene todos los destinos.
    
GET /api/v1/destinos/todo-incluido
    Obtiene todos los destinos que ofrecen "todo incluido".
    
POST /api/v1/destinos
    Añade un nuevo destino.
    
PUT /api/v1/destinos/
    Actualiza un destino existente por su ID.
    
DELETE /api/v1/destinos/
    Elimina un destino por su ID.
