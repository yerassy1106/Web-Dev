correct = int(input())
student = int(input())

# если число симметрично, правильный ответ — 1, иначе любое другое число
if correct == 1:
    if student == 1:
        print("YES")
    else:
        print("NO")
else:
    if student != 1:
        print("YES")
    else:
        print("NO")