v = int(input())
t = int(input())

MKAD = 109

# вычисляем конечную позицию с учётом направления и кольцевой дороги
position = (v * t) % MKAD
print(position)