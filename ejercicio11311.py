class Producto:
    def __init__(self, nombre, precio, stock):
        self.__nombre = nombre
       
        if precio < 0:
            raise ValueError(f"Precio negativo no permitido para {nombre}")
        if stock < 0:
            raise ValueError(f"Stock negativo no permitido para {nombre}")
        self.__precio = precio
        self.__stock = stock

    @property
    def nombre(self):
        return self.__nombre

    @property
    def precio(self):
        return self.__precio

    @precio.setter
    def precio(self, valor):
        if valor < 0:
            raise ValueError(f"Precio negativo no permitido para {self.__nombre}")
        self.__precio = valor

    @property
    def stock(self):
        return self.__stock

    @stock.setter
    def stock(self, valor):
        if valor < 0:
            raise ValueError(f"Stock negativo no permitido para {self.__nombre}")
        self.__stock = valor

inventario = []
productos_datos = [
    ("Manzana", 1.2, 30),
    ("Leche", 0.99, 20),
    ("Pan", -1.5, 15), 
    ("Huevos", 2.5, -12),  
    ("Queso", 3.2, 10)
]

for nombre, precio, stock in productos_datos:
    try:
        producto = Producto(nombre, precio, stock)
        inventario.append(producto)
    except ValueError as e:
        print(f"Error al crear producto: {e}")
def mostrar_inventario(lista_productos):
    for producto in lista_productos:
        try:
            total = producto.precio * producto.stock
            print(f"Producto: {producto.nombre}, Valor total: {total}")
        except ValueError as e:
            print(f"Error al acceder a los atributos de {producto.nombre}: {e}")
mostrar_inventario(inventario)