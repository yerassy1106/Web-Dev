def sleep_in(weekday, vacation):
    # we sleep in if it's not a weekday or if we're on vacation
    return not weekday or vacation

# examples
print(sleep_in(False, False))  # True
print(sleep_in(True, False))   # False
print(sleep_in(False, True))   # True