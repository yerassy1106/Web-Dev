def missing_char(s, n):
    # return string without the character at index n
    return s[:n] + s[n+1:]

# examples
print(missing_char('kitten', 1))  # 'ktten'
print(missing_char('kitten', 0))  # 'itten'
print(missing_char('kitten', 4))  # 'kittn'