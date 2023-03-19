def randomizer(text) :
    """make the text randomized"""
    text_list = [*text]

    # randomize function :
    _to = len(text_list) 
    _from = 1
    for i in range(_to) :
        for j in range(_from,_to,2) :
            # swap :
            t = text_list[j]
            text_list[j] = text_list[j-1]
            text_list[j-1] = t

        _to -= 1
        _from += 1

    # joined string :
    final_text = ''.join(text_list)

    return final_text

def unrandomizer(text) :
    """reversing the randomized text algorithme"""
    text_list = [*text]

    _to = len(text_list)//2 + 1
    _from = len(text_list)//2

    # unrandomize :
    for i in range(_to-1) :
        for j in range(_from,_to,2) :
            # swap :
            t = text_list[j]
            text_list[j] = text_list[j-1]
            text_list[j-1] = t

        _to += 1
        _from -= 1
    
    new_text = ''.join(text_list)

    return new_text

import datetime as dt

# def test() :
#     start = dt.datetime.now()
#     ten_seconds_after = dt.timedelta(seconds=5)
#     input('click before 5 seconds : ')
#     now = dt.datetime.now()
#     if now - start < ten_seconds_after :
#         print('you win')
#     else :
#         print('you lose')

# test()


# from cryptography.fernet import Fernet
 
# # we will be encrypting the below string.
# message = "hello geeks"
 
# # generate a key for encryption and decryption
# # You can use fernet to generate
# # the key or use random key generator
# # here I'm using fernet to generate key
 
# key = Fernet.generate_key()
 
# # Instance the Fernet class with the key
 
# fernet = Fernet(key)
 
# # then use the Fernet class instance
# # to encrypt the string string must
# # be encoded to byte string before encryption
# encMessage = fernet.encrypt(message.encode())
 
# print("original string: ", message)
# print("encrypted string: ", encMessage)
 
# # decrypt the encrypted string with the
# # Fernet instance of the key,
# # that was used for encrypting the string
# # encoded byte string is returned by decrypt method,
# # so decode it to string with decode methods
# decMessage = fernet.decrypt(encMessage).decode()
 
# print("decrypted string: ", decMessage)

# print(dt.datetime('2023-02-11 14:08:29.308237'))

# time = '2023-02-11 14:08:29.308237'
# time_obj = dt.datetime.strptime(time , '%Y-%m-%d %H:%M:%S.%f')

# def enc(string) :
#     my_dict = dict(zip('.0123456789-: ' , 'KoWqEpJyfAxNUc'))
#     new = ''
#     for i in string : new += my_dict[i]
#     return new

# def time_from_url(url) :
#     # url = test/<code>
#     pass

"""
'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0.123456789@:-' => 67 character
{ 'W5' , 'K6' , 'T1' , '00' , 'Pm' , '9L' , 'K9' , 'Df' , 'Vb' , 'Uc' , 'WW' , 'X2' , '44' , 'Ss' , 'Bq' , 'OI' , 'jk' , 'Px' , 'Aa' , 'iT' , 'vW' , '0M' , 'Gr' , 'Zn' , 'Ad' , '19' , 'O0' , 'o0' , '57' , 'Z3' , 'E2' , 'P1' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' , '' }
"""
# print(len('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0.123456789@:-'))
# https://leetcode.com/accounts/password/reset/key/3m73y-set-password/

# from time import time as t
# a = t()
# s = randomizer('elmokhtarie1096@gmail.com++2023-02-11 14:08:29.308237').replace(' ','#').replace('@','?').replace(':','=')
# print(s)
# print(unrandomizer(s.replace('=',':').replace('?','@').replace('#',' ')))
# print(len('elmokhtarie1096@gmail.com++2023-02-11 14:08:29.308237')**2)
# print(t() - a)

# import requests

# print(requests.get('http://127.0.0.1:5000/show-headers' , headers = {
#     'session' : 'eyJwYXNzd29yZCI6InRlc3QyIn0.Y-lF5A.p1B3NjmklpXJu_wfjxYaYWXTR4I' ,
#     'csrftoken' : 'gjEi1oTCRStza1havsA4M70P3ka2nP5F'
# }).content)

from time import sleep , time as t
import asyncio

# async def test() :
#     print('start')
#     sleep(2)
#     print('end')

# async def main() :
#     print('before')
#     asyncio.create_task(test())
#     print('after')

# asyncio.run(main())

# def fib(x) :
#     if x in (0,1) : return x
#     return fib(x-1) + fib(x-2)

# async def fib_async(x) :
#     if x in (0,1) : return x
#     # a , b = await asyncio.gather(fib_async(x-1) , fib_async(x-2))
#     # return a + b
#     return asyncio.create_task(fib_async(x-1)) + asyncio.create_task(fib_async(x-2))

 
# start = t()
# # fib(34)
# asyncio.run(fib_async(34))
# res = t() - start

# print(res)

# {
#   "created_posts": {
#     "post3": {
#       "content": "2412 post test",
#       "created_time": null,
#       "dislikes": 0,
#       "edited": false,
#       "first_comment": {
#         "auther": {
#           "id": 1,
#           "profile_pic": null,
#           "user_name": "bouzid kobchi 2022"
#         },
#         "content": "test",
#         "created_time": null,
#         "dislikes": 0,
#         "id": 0,
#         "likes": 0,
#         "media_files": []
#       },
#       "id": 3,
#       "is_public": false,
#       "likes": 0,
#       "media_files": [],
#       "situation": "s"
#     }
#   },
#   "email": "kyounnbcef@gmail.com",
#   "family_name": null,
#   "first_name": null,
#   "id": 3,
#   "signup_time": "Thu, 09 Feb 2023 13:09:46 GMT",
#   "user_name": "abdellah",
#   "user_type": "s"
# }

# async def print_bilal() :
#     print('bilal')
#     return 'done'

# async def main() :
#     asyncio.create_task(print_bilal())
#     return 'done'

# asyncio.run(main())
# ----------------------------------------- jwt --------------------------------------#
# import jwt
# data = {
#     'name' : 'bouzid' ,
#     'age' : 20 ,
#     'maried' : False ,
#     'father_name' : 'azzedine kobchi'
# }
# secret_key = 'test'

# token = jwt.api_jwt.encode(
#     data , secret_key , algorithm = "HS256"
# )

# print(token)
# print(jwt.api_jwt.decode(token , secret_key , algorithms = "HS256"))
# *----------------------------------------- jwt -------------------------------------#

# a = jwt.JWT()
# token = a.encode(
    # data , secret_key
# )
# print(token) 

# print(*jwt.__dict__)
# print(help(jwt))

# import jwt

# # print(jwt.JWT)
# token = jwt.JWT.encode()

# import asyncio
# import time

# first_event_loop = asyncio.new_event_loop()

# # print(first_event_loop)
# async def test() :
#     print('hello world')

# async def main() :
#     # await first_event_loop.create_task()
#     asyncio.create_task(test())
#     print(asyncio.current_task())
#     print('done')

# asyncio.run(main())

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@127.0.0.1:3000/bilal'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return 'test work'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
 