total_score,total_grade=[],[]
grades={'A+':4.5, 'A0':4.0,'B+':3.5,'B0':3.0,'C+':2.5,'C0':2.0,'D+':1.5,'D0':1.0,'F':0}
for _ in range(20):
    subject, score, grade=input().split()
    if grade not in ['P']:
        total_score.append(float(score))
        total_grade.append(float(score)*grades[grade])
total=round(sum(total_grade)/sum(total_score),6)
print(total)