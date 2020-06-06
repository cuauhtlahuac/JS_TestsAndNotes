# JS THIS

This es el objeto de JavaScript en el cual está ejectutando el código actual.

─ El contexto de node.js  this es un objeto vacío
Si queremos ver el contexto de node podemos usar global
─ En el contexto del navegador this es window (Window es el objeto global que contiene todo)

Cuando creamos un objeto, el contexto de this cambia, supongamos que tenemos un selector que toma el contexto de window. Cambiamos el selector dentro de un objeto, en ese momento el contexto del selecor cambia y ya no existira cuando lo llamamemos. tendremos que asignar this al selector para asignarle el contexto del objeto y pueda ser visto por window, esto en un primer nivel del objeto.

Hay tres metodos para arreglar problemas con this:

- bind: Tienes que pasarle el context como parámetro, se guarda en una variable porque no se puede ejecutar directo
- call
- apply

Para el documento thisCLasses es necesario ejecutar el index porque se maneja fetch