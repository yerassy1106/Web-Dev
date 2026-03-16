def diff21(n):
    if n > 21:
        return 2 * (n - 21)
    else:
        return 21 - n

# examples
print(diff21(19))  # 2
print(diff21(10))  # 11