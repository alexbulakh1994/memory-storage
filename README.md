1. LIFO requests:
Set item to LIFO: POST http://localhost:3000/api/lifo/add body {"value": <VALUE>}
Get item from LIFO: GET http://localhost:3000/api/lifo

2. Key-Value storaпe request
Set item to LIFO: POST http://localhost:3000/api/map/set body {"key": <"KEY">, "value": <"VALUE">, "ttl": <"ttl-value">}
Get item from LIFO: GET http://localhost:3000/api/map?key=<"key-value"> 
