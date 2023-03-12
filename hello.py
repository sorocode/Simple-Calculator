# 3개 값의 평균값 도출
# def show(any):
#     print('평균값: '+str(any)) 
# def avgfunc(a,b,c):
#     avg=(int(a)+int(b)+int(c))/3
#     return round(avg,2)
# show(avgfunc(input('1번째'),input('2번째'),input('3번째')))

#할인 후 가격
def saleprice(card, price,discount):
    if card==True:
        result=price*(1-discount)
    else:
        result=price
    return result
card=True
price=15000
discount=0.3
print(saleprice(card, price, discount))