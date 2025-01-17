# 圆角、阴影、文本图像处理、CSS 函数

CSS 圆角边框、椭圆边框，盒子阴影、文本阴影，文本溢出显示省略号，opacity 透明度，filter 滤镜，object-fit 图片裁剪，防止拖拽文本域，calc 函数，var 函数详细解读和最佳实践

## 一、圆角

`border-radius` 用来设置元素的（4 个方向）外边框`1/4`圆角效果。

| 圆角类型 | 描述                                                                                                   | 举例                      |
| :------- | :----------------------------------------------------------------------------------------------------- | :------------------------ |
| 圆角边框 | 当使用一个半径时确定一个圆 表示四个不同方向上边框圆角的半径大小                                        | border-radius:50px;       |
| 椭圆边框 | 当使用两个半径时确定一个椭圆 两半径用 **反斜杆 /** 分隔 第一个值是椭圆水平半径，第二个值是椭圆垂直半径 | border-radius:50px / 30px |

注：

圆角效果：就是这个 **椭圆** 或 **圆** 与 **边框** 的交集形成的`1/4`圆角效果

### 1、圆角边框

```css
/* 四个方向上圆角的半径为50px */
border-radius: 50px;
<style>
  .box {
    width: 100px;
    height: 100px;
    border: 2px solid skyblue;
  }
  .circle {
    width: 100px;
    height: 100px;
    background-color: khaki;
    /* 上右下左 4个方向边框的圆角半径大小 50px */
    border-radius: 50px;
    /* 上右下左 4个方向边框的圆角半径大小 30px */
    /* border-radius:30px; */
  }
</style>
<body>
  <div class="box">
    <div class="circle"></div>
  </div>
</body>
```

| .circle 的 border-radius:50px 时效果                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | .circle 的 border-radius:30px;时效果                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image-20220723205249582](data:image/png;base64,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) | ![image-20220723210554223](data:image/png;base64,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) |

注：

四个方向（左上角，右上角，左下角，右下角）上的圆角效果，就是 border-radius 属性确定的圆与对应边框相切形成的 1/4 的圆角效果。

### 2、椭圆边框

```css
/*
	x表示椭圆水平半径
	y表示椭圆垂直半径
*/
border-radius: x/y;
/*
	20px 表示椭圆水平半径
	50px 表示椭圆垂直半径
*/
border-radius: 20px/50px;
<style>
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid skyblue;
    position: relative;
  }
  .oval {
    width: 200px;
    height: 200px;
    background-color: khaki;
    /* 四个方向的椭圆水平半径/垂直半径 */
    border-radius: 80px/100px;
    /* border-radius: 40px/80px; */
  }
</style>
<body>
  <div class="box">
    <div class="oval"></div>
  </div>
</body>
```

| .oval 的 border-radius:80px/100px;                                                                   | .oval 的 border-radius:40px/80px                                                                     |
| :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| ![image-20220723213430150](https://www.arryblog.com/assets/img/image-20220723213430150.1977df3a.png) | ![image-20220723213203428](https://www.arryblog.com/assets/img/image-20220723213203428.5f39566a.png) |

注：

四个方向（左上角，右上角，左下角，右下角）上的圆角效果，就是 border-radius 属性确定的椭圆与对应边框相切形成的 1/4 的椭圆效果。

### 3、圆角边框 - border-radius 4 种不同值写法

| 属性值   | 举例                          | 说明                                                         |
| :------- | :---------------------------- | :----------------------------------------------------------- |
| 单值写法 | border-radius:50px;           | 表示上右下左四个方向的圆角半径                               |
| 双值写法 | border-radius:30px 50px;      | 第一个值表示左上角和右下角 第二个值表示右上角和左下角        |
| 三值写法 | border-radius:30px 50px 80px; | 第一个值表示左上角 第二值表示右上角和左下角 第三值表示右下角 |
| 四值写法 | border:10px 20px 30px 40px;   | 四个值，分别表示左上角、右上角、右下角、左下角               |

**单值写法**

```css
/* 四个方向的圆角半径为 50px */
border-radius: 50px;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    /* 四个方向的圆角半径为 50px */
    border-radius: 50px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220723220230133](data:image/png;base64,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)

**双值写法**

```css
/*
	30px 表示左上角和右下角 圆角半径
	50px 表示右上角和左下角 圆角半径
*/
border-radius: 30px 50px;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    /*
        	30px 表示左上角和右下角 圆角半径
       	 	50px 表示右上角和左下角 圆角半径
        */
    border-radius: 30px 50px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220723220443279](data:image/png;base64,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)

**三值写法**

```css
/*
	30px 表示左上角 圆角半径
	10px 表示右上角和左下角 圆角半径
	50px 表示右下角 圆角半径
*/
border-radius: 30px 10px 50px;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    /*
            30px 表示左上角 圆角半径
            10px 表示右上角和左下角 圆角半径
            50px 表示右下角 圆角半径
        */
    border-radius: 30px 10px 50px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220723220733444](data:image/png;base64,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)

**四值写法**

```css
/*
    10px 表示左上角 圆角半径
	20px 表示右上角 圆角半径
	30px 表示右下角 圆角半径
    50px 表示左下角 圆角半径
*/
border-radius: 10px 20px 30px 50px;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    /*
            10px 表示左上角 圆角半径
            20px 表示右上角 圆角半径
            30px 表示右下角 圆角半径
            50px 表示左下角 圆角半径
        */
    border-radius: 10px 20px 30px 50px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220723221044892](data:image/png;base64,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)

### 4、椭圆边框 - border-radius 4 种不同值写法

反斜杠前面的值表示椭圆水平半径，后面的值表示椭圆的垂直半径。

| 属性值   | 举例                                                     | 描述                                                                                                                                  |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| 单值写法 | `border-radius:50px/30px;`                               | 50px 表示四个不同方向椭圆水平半径 30px 表示 四个不同方向椭圆垂直半径                                                                  |
| 双值写法 | `border-radius:10px 20px / 30px 50px;`                   | 左上角和右下角，椭圆水平半径 10px，垂直半径 30px 右上角和左下角，椭圆水平半径 20px，垂直半径 50px                                     |
| 三值写法 | `border-radius:30px 50px 60px /20px 30px 50px;`          | 左上角椭圆水平半径 30px ,垂直半径 20px 右上角和左下角椭圆水平半径 50px，垂直半径 30px 右下角椭圆水平半径 60px ，垂直半径 50px         |
| 四值写法 | `border-radius:10px 20px 30px 40px/40px 30px 20px 10px;` | 左上角，右上角，右下角，左下角椭圆的水平半径为 10px 20px 30px 40px 左上角，右上角，右下角，左下角椭圆的垂直半径为 40px 30px 20px 10px |

**单值写法**

```css
/*
	30px 表示四个不同方向上椭圆水平半径
	50px 表示四个不同方向上椭圆垂直半径  
*/
border-radius: 30px/50px;
```

![image-20220723230146409](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAAE8CAIAAAA9pfFvAAAZFElEQVR4Ae2dza4cN3qGfQFZ5CKCAAGymHVWuYFZ5Cayyi67uYPssg6yCpA7GGQ99ngMeWT9y5aPLUsayWNZI9sjWz8eSxpXXpnCZ4pVrK4fVpFf90M0GiwWi2Q9/B5Wd5/uOm91JAhAwBuBt7wNmPFCAAId3hIEEPBHAG/9zRkjhgDeEgMQ8EcAb/3NGSOGAN4SAxDwR6AZb5+/6L75trv3ZXd2u7t81r1/tXv3Uveb891bb71+KM8DApsSiINN4acgVCgqIBWWCk6FaDOptrc/PO++/Kr7+Hb3+2vDWsYoN50zGofAeLApRBWoClcFbe1Uz9vHT7vbf+w++HBYV4uhcZRWjQwE1hOYGGwKWoWuArhequHtk2fdrXvduasHjA3TMBHl+jmjBQjMCjYFsMJYwVwj7evti5ev3iqcvz7JWLxFpJ0JzPI2jE3BrJBWYO+bdvRW7+w/vDnDWLzdOWrpboG3AZoCW+G9Y9rL288fZD95IlwgcAQE9KmVgnyvtL23+vDt5t3Zl9kjmEhO4QQJKNR3+bR5Y2/1rv2jz5AWAidEQAG//YdVW3r77ZPu2qdrJ2zxW44TXOw55ZUESgWbwl7Bv2XazNtHj7srZ2ul1TSUQrlyRjn8FAgUDDYFvxTYLG3jrRabItLi7SnY0s45FvRWJyUFNrvqbuCtXtyvf3lsc1kWpTVLBgJ9AsWDTSJs8163tLf6MO3GrQIvj41pcZTWMhkIJAS2CDbpsMEnzKW9Lf4nny1QJrPFJgQCgY2CTVKUTkW91Re+iAAIQKBPQGoUTeW8/erP3bkreAsBCAwQkBoSpFwq5O3T74t9gNxfqyiBwBEQ0MfL0qRQKuRt8be1Nk8bveWw9slAwAhsHWzl3uiW8FZ3APjthYHXBoZjTWZrlGvGxrFHRmDrYJMmkqVEWu3ts++7Sx9vJa3CYmuURxZ5nM4aAjsEm2SRMqvTam9vfb6htHi7Jgo5di6BHbzVkKTM6rTOW/1W+L3LeLstgbnBR/3FBPbxVsqs/pH9Om/LfjVqEPc+KAe7pvDUCOwWbBJnXVrh7YOvuc5AAAILCUifFWmpty//WvLHA6e2rnO+ENBPDiTR0rTU2/sPFy4zMyfMXrmEzD6d0gsE9iAgiZamRd6+fNld/WSPE/vNeelq/2fkVX6m9tSHwAwCdpXYJ8wkkVRalBZ5q78d73NieLsX590mtOmOdvZWk7v0axiLvL2++q5Rk8OR623TgT55Hn2cxf7eSqVFab63+lnDjrNlJEPm0a8v7tk7fZ0WAYu2HSN82e+E5nurf0m251lFKC//9/V//sV3qLsr/z3nunpfUbDtB1lCzU8zvf3uSfe7n/4t7W6I30SJuvvF025T3E5HbwbbTqgllLSamWZ6e+eLnU4mP5eoW30KGEBhAtJqZprjrf5MfOlG4RHn/RzpCHVH4LDLH4GLN+Z+B2OOtw+/aYcI6rYzF4ykAAHJNSfN8faTOwXGN/cCm3/LgboVpmPu9Pmqnw+2zVFLrjlpsrd/+aF7/9rmo+9P8yhK1K0wI/05OpqS0WDbFrXkkmKT02Rvd/yO1BuADqFE3TdwHY1CVU7kULBti3rOd6cme3tW40WyJm8CStTdNp6qKFSl0wnBtiFqKTY5TfP2+Ytq/y1+GkrU3TCeqihUpdNpwbYVav3Heok2LU3z9uGu3218g8tklKj7Brcqce+908nBthVqiTYtTfP2s3tbDbToTKOui2likFkCEm1amuZtG1+3yJ5tJD/qTqFEnUYJSLRpaYK3j592b59v9DwjY22EqGsoyDgjINGk24Q0wdsv/lTz5Be95UDdmlM2tJj6GM+iYCt8atJtQprgba2/AIXpX4oSdQvHk18bp498abCVRD3tr0ETvL3wUclhTYe4zluNGXVrTtzciW6hfgveSrcJ6ZC3T551b39Qc/rXoUTdmnPXgoqzxrAu2Mqglm6S7lA65G31m5uvRom6ZeJplgBOK68OtjKoJ9wS/ZC3W//broMTXAIl6paJp4OT5b1CiWArgHrCP/465K3uqu59Mn4aP+oexzyexFlIukNp1Nsff+zOXT0aUqh7NFN55Cci6aTeaBr1Vu+Pj+Jia2eBuoaCTNMEDn00NeptCzemKf2WA3Wbjte614nSwbYc9aHb1ox6e/f+8o5LTcAGKFG3/rSWCo+y7WwQbAtRS73RNOptlRtKJTOxDUrUXRhPyewc2eY2wbYE9aHbTY16e+VsSZdl53IzlKhbf3LLhsr61jYLttmopd5oGvVWP8Bfz2JlC1uiRN3687syPMoevmWwzUMt9UZT3lvdMuOdC/M6KwsxtLYxStStP8VbhM2yNjcOthmopd7oPWvy3up3gMtO3ttRqHsiE+3sNEd/iJv39utHzs5zxXqBuqcz127OVALmU97b+w/dnOEKY+0cUddQkGmCgATMp7y3f2jgj7cScse3HKjbRLyWWIUXnsiOwXZ4hBIwn/Le3rx7uOkdEO+LEnWbmPQd4mqwi32D7QBqCZhPeW9v3DrQ7uCZFy/cHSXqNjHvxQNpSoO7B9sYagmYT3lvG/kFXw2UqDsWT1MEcFqnRrBlUY/+mi/vbSP3TK6EEnWz8eTUySnDrhRsw6hH76Wc9/b89eHmppx/wTr1UKJuEwFQMJYONlUv2AZQS8B8ynt7RL+YH4BycAp/qoC6i9Fx4FoCEjCf8t6+d3ltx9PcaLwX1G18go52eBIwn/LevnvxaInMXFBQl0ioQEAC5lPe23eq3jbZ1GrjLQfqVghci4HdMm0E22vUEjCf8t428r+8mkGJusevbjPB9gq1BMynvLczFzk75ZApNsfW7szxFBtA1C/qbkG1oTZbCrZXWPIp762dg2VCBP/yX37+znDY9e+/Uh/KWvnr/N//w+spUcYaCZn/+p9Xu3RgUq7GQy9JuTZDee1n1G1kIjYZRi7qMjHfKYyTQ8rGPN4WnGbULQizraYSCe1qgbev1ye319sQZ6jblm+lXoUdg7czWSSn/OjXR/5nJNQ9TnVnhv22EJa8Tl5xAicS0ydymtuG5oowO/6B7eytgJ5ITJ/IaR6/IW0uH/t7i7rEOgTWEqjiLequnbY2LwKMajcCtbxFXdSFwHICFb1F3eXTttu6TkdtEqjrLeqiLgSWEKjubVD3F393/P8DgU+YlwRom5e76qNqwVtNp76bcQqTWkrdQVxxYfJdl/7mQdrxIYOV4+4GK6hwvM743lyblL8ikE/53xVssNiczhQWUTfg0nN4hFCOGcb5fqAP7g1N2XP/KJXY3sGMHaK9Id/PDNaJW7MKcebT/70S17FmVeef/vG7sEuZ+JAjz+Pt/hO8Xt0QuPYcAteedUZhV8hYeVw4ftZWc6TaeJ2wN36Omxo8drAwHCVvB7X8118+0CPUifNxX8eZx9sq87pGXcW3PTT4EO5J0NumZaxmnInPXTVzjynV4jqWj3vvF8Z747zVtEzOWx2lXaFauCYrHzL/+W93tDc8QoVQYm1ql0ps01kGb2tNmNT92795abE1nkkGqcoqCYeEXfHhYVe/PBwV7w117LlfwUr6daxEmbia8rnHyCFJI3FN5YOK1mzYGwr1nGyG8vg6bNdqiRrK9exYWt7fJvHhZTN4EuJYY7ZMyNtz7nTC4f29Vt7PWOXQV//ZKsQZaycuVD4cHgrjOnE+OcQ2pVzwMPhp5crocBWGcj2HXUk1HRse8YH+8lxv3c1ZCPrwrMGHWD9YaBXskPjEbW8uY5VVwfKWGSzU3sHyUBg/Wzu5Q+IK5uGgnyrMlYdGkr1xy57yeOtptn76JF8RHwd9nNe5xJshb4WWsfLk3K28n7Ga2jX4CBUGd8WFcTuDh1iFXCaIZ8dqM+StPDHz//7jTAOw1nSxtSu2FfrL4K2/ORuSM3EjRKrFa5KxzeTcrbyfsZq2y0qUGSwcKe/vyrUQegkvjC0f3qNqU5l+PvE2iBqO5f3t+QCi1PP4tJXq5WjaCbj0bNySjG3qlEO+X5LQUIXcI645pY7Vjzu1wpBJdiWbSWXJaf2aqKGOtAy7zO3gbb++pI17Ud7xR1Ncb5MQcbEZ4i+JwjDyZNdInZEzjY9Kqg3uGizUgbny/q6RmskADm4m19uD9V1WwFuP0xaiPI51K4kzyuceg2c9WDmuOVjBCuOaIa9d/cJ4lx0bZ3KHTCzH24zUfM9xAwITg5JqEHhFIJ+0VGbSBlE7sjAzTxCAQEogo6aK8bbwZ28p+g2WP7o4FQJ4eyozzTJxTATwFm8h4I8A3vqbs2O6bnAuywjgLd5CwB8BvPU3Z8tWaI46JgJ4i7cQ8EcAb/3N2TFdNziXZQTwFm8h4I8A3vqbs2UrNEcdE4FGvEUeCEBgBgG8nQHrmBZszsU1AbzFWwj4I4C3/ubM9YWCwRchgLd4CwF/BPDW35wVWbBpxDWBit4O/lY+LozvXTKYH1cubmq85vje8XbG9463zF4ILCRQ3VsTMpxArEGc75/e+F7Vz1VQee4R92KH9zNWLd4Vt2kV4ky4n6BVi3f1b0oY7yUPgZRAC95qTBbNlgmFYbhWGDJWGDK5Z1WOdyWbUxoJh8TPaxqUnLplWWhBDtt9QwdvAhx3RB4CKYFa3koGe2hMg26EQtsbhj5YaGeVtDlY2QpzLVtrSY9xuTVimaS1uHI/H+45GMrVgvls5SETX6JD5VBiDepYldgmmVMhUMtb8Q0Rr+eQCSVh03aFabDCkLHCkOk/2+GWSeqEchVapp/XrsFH3FT/8LgkrpnkdY0N19vgZ+KtNkO53ePb6qsdiRrK9Yy0CdhT2WzH2yBJ4B6if9yBkb3x4YPVrLCf6U+81Ul2qdx2WUZ14nxyiDbtrWzYFfyMq+lw81aZwWpqJDziA8mfEIFa3io67SHcIdatxDbDrrg85O2QwalKDh+sEwpDzZEK2jVYZ7yLwUPiXuyfTQVvEz9z3varxW2SPyECdb0V6EEBRgqTQ/pTZc70M+FYlY88JtYJ/cZdxG32R9UvUf3goWVURyWhzZAxUc3z0I4utvEr537jlBw5gVreCmsI0ORZm+GRVLBNy4QDtZk8rLyfSWpaU/3yuMTaiQtDPtmVbCb1JZuVxB8vycDwflV7LZ94G0QNh/P+1jCebqYFby3ck4xtanpCvl+SzFyuQlweH5Irn1gnOTzZjBtRXk6qgj3ivdIylJvbwVurbGLHwqsFVeCjqZjkqeRb8NZYKwpDPmSSzXiX8ra3f3hSc3BzpNAaPFgnGUOymbQzazO53s46lsrHT6BBbxX9QYCQGXnOTY8dkqtg5aEj2xzMjNQJu6y7ODPY1PRCvJ3O6hRrVvT2FHH33o0DAQJLCODtEmroB4G6BPAWbyHgjwDe+puzuis9vbdAAG/xFgL+COCtvzlrYb1nDHUJ4C3eQsAfAbz1N2d1V3p6b4EA3uItBPwRwFt/c9bCes8Y6hLAW7yFgD8CeOtvzuqu9PTeAgG8xVsI+COAt/7mrIX1njHUJYC3eAsBfwTw1t+c1V3p6b0FAniLtxDwRwBv/c1ZC+s9Y6hLAG/xFgL+COCtvzmru9LTewsE8BZvIeCPAN76m7MW1nvGUJcA3uItBPwRwFt/c1Z3paf3FgjgLd5CwB8BvPU3Zy2s94yhLgG8xVsI+COAt/7mrO5KT+8tEMBbvIWAPwJ462/OWljvGUNdAniLtxDwRwBv/c1Z3ZWe3lsggLd4CwF/BPDW35y1sN4zhroE8BZvIeCPAN76m7O6Kz29t0AAb/EWAv4I4K2/OWthvWcMdQngLd5CwB8BvPU3Z3VXenpvgQDe4i0E/BHAW39z1sJ6zxjqEsBbvIWAPwJ462/O6q709N4CAbzFWwj4I4C3/uashfWeMdQlgLd4CwF/BPDW35zVXenpvQUCeIu3EPBHAG/9zVkL6z1jqEsAb/EWAv4I4K2/Oau70tN7CwTwFm8h4I8A3vqbsxbWe8ZQlwDe4i0E/BHAW39zVnelp/cWCOAt3kLAHwG89TdnLaz3jKEuAbzFWwj4I4C3/uas7kpP7y0QwFu8hYA/Anjrb85aWO8ZQ10CeIu3EPBHAG/9zVndlZ7eWyCAt3gLAX8E8NbfnLWw3jOGugTwFm8h4I8A3vqbs7orPb23QABv8RYC/gjgrb85a2G9Zwx1CeAt3kLAHwG89TdndVd6em+BAN7iLQT8EcBbf3PWwnrPGOoSwFu8hYA/Anjrb87qrvT03gIBvMVbCPgjgLf+5qyF9Z4x1CWAt3gLAX8E8NbfnNVd6em9BQJ4i7cQ8EcAb/3NWQvrPWOoSwBv8RYC/gjgrb85q7vS03sLBPAWbyHgjwDe+puzFtZ7xlCXAN7iLQT8EcBbf3NWd6Wn9xYI4C3eQsAfAbz1N2ctrPeMoS4BvMVbCPgjgLf+5qzuSk/vLRDAW7yFgD8CeOtvzlpY7xlDXQJ4i7cQ8EcAb/3NWd2Vnt5bIIC3eAsBfwSWePv2eX/n2cIayRggUISABMynt7K73vkAbyEAgWoEJGA+5b1992K1ERdZrmgEAq4JSMB8ynv73mW8hQAEqhGQgPmU9/bc1Wojdr1MMngIFCEgAfMp7+3563gLAQhUIyAB8ynv7aUb1UZcZLmiEQi4JiAB8ynv7bVP8RYCEKhGQALmU97bG7eqjdj1MsngIVCEgATMp7y3N+/iLQQgUI2ABMynvLd/uF9txEWWKxqBgGsCEjCf8t7ef4i3EIBANQISMJ/y3n79qNqIXS+TDB4CRQhIwHzKe/v4Kd5CAALVCEjAfMp7+/xF986FaoMusmLRCAScEpB6EjCf8t7qmN9fw1sIQKACAak3mka9vXJWYcROF0iGDYGCBKTeaBr19pM7eAsBCFQgIPVG06i3d/kTLjf9gEANAlJvNI16+/CbCitNwRcbNAUBpwSk3mga9fbJM7yFAAQqEJB6o2nU2x9/7Pj1vNMFm2H7JSDppN5oGvVWR/JrPr/Tz8idEhj9BV/Q+ZC3tz6v8CLBKW6GDYEiBCTdoXTI2wdf4y0EILArAUl3KB3yVu+P3+ZGyjX+ElBk5aYRdwSk26EPpST1IW9V5cJHuy427kAzYAgUJCDdJqQJ3p7xrSmutxDYi4B0m5AmePvFn7jeQgACOxGQbhPSBG/1O0D+x1fBF0I0BYEcAYk2+rNbM3qCt6rLvZRzoCmHQEECo/dMNmmVmebtZ/d2epFQEAFNQcAdAYk2LU3z9uGf8RYCENicgESblqZ5q1tmcO8Ld4s3A/ZFQIqN3psmNnqatzqCvwb5CgJG647AtL8ABXsne/vlV5u/SHAHmgFDoCABKTY5Tfb2Lz9073ObuL3++F4wGmjKBQHJJcUmp8neqkVuN+UiAhikRwKHbiiVGD3HW25b4zEgGLMLAoduTLPC25d/7S7yz6x5qQyB0gT0dQvJNSfNud6q3Ttf8OkUBCBQmIC0mplmevvdk+53lwoP2sXLGAYJgY0ISChpNTPN9Fatf3wbbyEAgWIEJNT8NN/br/jOY+m3Nxst5DTrgoCEmp/me6s+rn9abLFxQZZBQmAjAlJpUVrkLd+d2mgWafbUCMz5jlQs+CJvX77srn7CJRcCEFhFQBJJpUVpkbfq6f7DVSM+tWWV84VAn4AkWpqWeqs/E/OvDPozQQkEJhKQPjO/axE7vtRbtcEt0SfOENUg0Ccw4ebmsahJfoW3aunGLV4tQwACswlInHVpnbfffNu9d3n2oPtrDyUQOB0CUkbirEvrvFXf/OOv0wk4zrQIgQn/tuug1Ku9ffZ9d+ljLrkQgMAkApJFyqxOq73VCPS3499emDToIssVjUDAKQFpsvSLFonpJbxVkzfv4i0EIHCAgDQplAp5+/T77srZgUE7XSMZNgSKEJAg0qRQKuStRqOfNZy7groQgMAAAamx6Hc/Oc3Lease7n05MOIiaxWNQMA1AalRNBX1ViPjja7r8GLwWxAo97bW3C/t7Q/P+RIVLzog8DMBfTVKUpROpb3V+J484ycHP0/bFus3bXohoB8PSIcN0gbeapTfPuHjZdQ9dQL6AFkibJO28VZjffQYdU89cL1cFbcYp6SVApulzbzViLXY8BvdLWKCNhsnoLDf7EobloItvVUPenH/0WdcdiBwQgQU8Nu8p40v3ht7q670YRp/HGr8+sDwShFQqG/w6XFsbMhv723o5/MH/Mf6E7rmlNLAUTv6b/EK8r3SXt7qfPRb4Q9vErsQOEICCuzVP4WfpfyO3mpcL16++i7k+etHOHOOrgwMtSABBbNCWoG9b9rX23Buetd+61537ir2QsAxAQWwwnj7j6AGF4Qa3oaBPH7a3f5j98GHjmeu4LJNU44IKGgVugrgeqmet+Gc9eGb7gCgf0mmt/WOZo6hniABhagCVeG6yyfG42tCbW9tdM9fvHpnr7cKZ7e7y2fd+1e7d/lHu/zjv3oEFH4KQoWiAlJhqeBUiDaTmvG2GSIMBALtE8Db9ueIEUIgJYC3KRG2IdA+Abxtf44YIQRSAnibEmEbAu0TwNv254gRQiAlgLcpEbYh0D4BvG1/jhghBFICeJsSYRsC7RP4f35Q9AYUcaNbAAAAAElFTkSuQmCC)

**双值写法**

```css
/*
	30px 表示左上角和右下角 椭圆水平半径
	50px 表示右上角和左下角 椭圆水平半径
	80px 表示左上角和右下角 椭圆垂直半径
	100px 表示右上角和左下角 椭圆垂直半径
*/
border-radius: 30px 50px / 80px 100px;
```

![image-20220723231150067](https://www.arryblog.com/assets/img/image-20220723231150067.9b21e130.png)

**三值写法**

```css
/*
	左上角椭圆水平半径30px ,垂直半径20px
	右上角和左下角椭圆水平半径 50px，垂直半径30px
	右下角椭圆水平半径60px ，垂直半径50px
*/
border-radius: 30px 50px 60px /20px 30px 50px;
```

![image-20220723231558869](data:image/png;base64,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)

**四值写法**

```css
/* 
	左上角，右上角，右下角，左下角椭圆的水平半径为 10px 20px 30px 40px
	左上角，右上角，右下角，左下角椭圆的垂直半径为 40px 30px 20px 10px
*/
border-radius: 10px 20px 30px 40px/40px 30px 20px 10px;
```

![image-20220723231922803](data:image/png;base64,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qpuf7L7euwVmGH4jnCBz5+vf3qqZqabnABhZVnpgCExO1OtXFQ/AQIkeaFqrVW9cr8tzTc8BMOK6bG/9xz+qs9/7w2x4DpfjJGrw78+fbtTbrx/3HwqQp8tKj1tI4Hi8eb3evNH0EAARukTP1YvOhIWBe+tGvf1ajdtlBjgOXcrm4mz96bX6+V5tbB7vPEdgV4sTZOJUvXm93rhef7hREoAB6b6c8/rVGh+ru/drtX2M80CAszP1xrW6dqnpOQCyvHQP6/rlmpqsB/P1YL72/bwzcFBXL9ZrV2v2bNNzAMTpcvfWCx4u1IP5Wlgc/Dwwuqan6sbleu1KjY83PQpAot6ip6q2t2t+sRYWa2GxNrcGPBWMlrGxunaprl+q8xZ4ABrTc/TsebpSj5dqYbEWlwczEoyWKxfq6iVnDwI07uDR80ynU0srtbhcS8u1tFJbQ7D243BCjqLvf3/GxuryXF2+UJfn9nmYHQDH7rCH8YyN1dy5mjtXVbXWrqWVevrsx6qPPJNuerIuzdWl2Zo73/QoAPymHycQTk/V9NTu/bera7XSrpW1Wl2r1XatrPXh+nAinJ7Y/U7gwvmammx6GgBe1O9jl2ema2a6rlzY/de1dq22a229Vtu11q72erU3+vwnQrNmpmv2TJ0/W7Nna9pj0gGG14CfNfFsEWjPzk6tb1R7ozY2an2z1jdqY/O3H9udwQ4DfTFxqmamama6zk7XmZk6N1NjniMBcAIc7wO2Wq2amtx/5b/TqY2t2tysza3a2q7Nrdraqq3t2tqu7e3a7vzrn53qPPuxUzs71dFJDECrVWNjdWqsxsdrYqJOn6rTEzV5uiZP1/RkTU16Mh3ASXTYu7cAAE4Uy/IAQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQATRAwBEED0AQIT/B0EygJNDcRsHAAAAAElFTkSuQmCC)

### 5、border-radius 的值百分比表示法

- 百分比% 是相对于当前元素的可视宽和可视高而言
- 水平半径相当于元素的**可视宽**而言 水平半径 = (width+padding+border) \* 百分比
- 垂直半径相当于元素的**可视高**而言 垂直半径 = （height+padding+border) \* 百分比

```css
/*
	如果元素的宽为100px  高为 200px  内边距为50px
	则 20%,换算后，
	椭圆水平半径=（100px+ 50px*2)*20%=40px
	椭圆垂直半径=(200px+50px*2)*20%=60px
*/
border-radius: 20%;
/*
	如果元素的宽为100px  高为 200px
	则 20%,换算后，
	椭圆水平半径为 100px*20%=20px
	椭圆垂直半径为 200px*50%=100px
*/
border-radius: 20%/50%;
<style>
  .box {
    width: 400px;
    height: 200px;
    background-color: pink;
    /*
            计算得到
            椭圆水平半径=400 *20%=80px
            椭圆垂直半径=200 *20%=40px
        */
    border-radius: 20%;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220723235012574](https://www.arryblog.com/assets/img/image-20220723235012574.1c7ff6d9.png)

### 6、单独设置四个方向圆角-小属性

| 属性                       | 描述   | 举例                                |
| :------------------------- | :----- | :---------------------------------- |
| border-top-left-radius     | 左上角 | border-top-left-radius:20px;        |
| border-top-right-radius    | 右上角 | border-top-right-radius:20px 30px;  |
| border-botttom-left-radius | 左下角 | border-bottom-left-radius:10%;      |
| border-bottom-right-radius | 右下角 | border-bottom-right-radius:10% 20%; |

**小属性主要是用来层叠大属性的**

```html
<style>
  .box {
    /* 宽 */
    width: 100px;
    height: 100px;
    background-color: tomato;
    /* 4个方向圆角半径为50px */
    border-radius: 50px;
    /* 左上角圆角半径20px */
    border-top-left-radius: 20px;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20211110221612092](data:image/png;base64,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)

## 二、box-shadow 盒子阴影

box-shadow 给盒子添加阴影效果，阴影是不占空间的

```css
box-shadow: [inset] x偏移 Y偏移 模糊半径 [扩散半径] 颜色;
```

- [ ]方括：表示这个值可以省略不写
- inset：表示内阴影，当需要设置内阴影时，才添加
- x 偏移：阴影在 x 轴（水平）方向偏移量 值为正，表示阴影向右偏移 值为负，表示阴影向左偏移
- y 偏移：阴影在 Y 轴（垂直）方向偏移量 值为正，表示阴影向下偏移 值为负，表示向阴影向上偏移
- 模半径：值只能是 >=0 的值，表示阴影的模糊半径
- 扩散半径：取正值时，阴影扩大；取负值时，阴影收缩。默认为 0，此时阴影与元素同样大。
- 颜色：表示阴影的颜色

### 1、简单阴影

语法：

```css
box-shadow: x偏移 Y偏移 模糊量 颜色;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    margin: 50px auto;
    /*
        	60px  x(水平)向右偏移量
        	20px y(垂直)向下偏移量
        	10px 阴影模糊量
        	red 阴影颜色为红色
        */
    box-shadow: 60px 20px 10px red;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20211111155738770](data:image/png;base64,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)

### 2、阴影延展

语法：

```css
box-shadow: x偏移 Y偏移 模糊半径 [扩散半径] 颜色;
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    margin: 50px auto;
    /*
        	60px  x(水平)向右偏移量
        	20px y(垂直)向下偏移量
        	10px 阴影模糊量
        	50px 阴影的延展大小（上下左右都延展50px)
        	red 阴影颜色
        */
    box-shadow: 60px 20px 10px 50px red;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20211111155903190](data:image/png;base64,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)

### 3、内阴影

语法：

```text
box-shadow:[inset]  x偏移   Y偏移   模糊半径  [扩散半径]  颜色;
.box{
    width:100px;
    height:100px;
    background-color: aquamarine;
    margin:50px auto;
    box-shadow:inset 0px  0px  10px 20px red;;
}
```

![image-20211111160053223](data:image/png;base64,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)

### 4、多个阴影

- 如果一个盒子有多个阴影，则每个阴影之间用 `,`（逗号）隔开
- 当阴影个数`> 1`时，阴影应用的顺序为从前到后，第一个指定的阴影在最顶部显示。
- 内阴影不管写在哪个位置，都会在外阴影上面。

语法：

```css
box-shadow: [inset] x偏移 Y偏移 模糊半径 [扩散半径] 颜色, [inset] x偏移 Y偏移
    模糊半径 [扩散半径] 颜色, [inset] x偏移 Y偏移 模糊半径 [扩散半径] 颜色;
<style>
  .box {
    width: 100px;
    height: 100px;
    /* 背景颜色为橘黄色 */
    background-color: orange;
    margin: 50px auto;
    /* 左上角和右下角圆半径为100px */
    border-radius: 100px 0px 100px 0px;
    border: 4px solid tomato;
    /* 红色阴影，红色里面的黄色影阴,最外面的黄色阴影 */
    box-shadow: 0px 0px 10px rgb(251, 9, 9), inset 0px 0px 20px yellow,
      0px 0px 10px 30px yellow;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20211111161237794](https://www.arryblog.com/assets/img/image-20211111161237794.1cff0d6c.png)

### 5、去掉阴影

```css
/*
	none 为box-shadow的默认值，不设置阴影效果
	当我们想去掉元素添加的阴影效果时，就可以设置box-shadow:none;
*/
box-shadow: none;
```

### 6、实战案例-纸张效果

```html
<style>
  .page {
    margin: 50px auto;
    width: 400px;
    height: 600px;
    padding: 20px;
    box-shadow: inset 0 -48px 48px rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
      5px 5px 16px rgba(0, 0, 0, 0.3);
  }
</style>
<body>
  <div class="page"></div>
</body>
```

![image-20220725183849488](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAAIfCAIAAAAZv/fdAAARBklEQVR4nO3dt5LjxgKGUZBSqlzv/4oKp5a8Aa4gLEyjYX+acwIVB0M3W8K3bcDZ2/P5bABC7uk3AHw1DQKSNAhI+vOoJ7KuBN/pdrvtevjmdogOMLY2SasbJD1AjcoYrWjQ3D1VCZgrzmKJqho0eZ/6g8BHmuxL/cH/f2uxGoM7lL+cPAJ8nnFWBkfKX/53vJyM/ncnb49vAF+li8v4RuH2fwcL7ShEp//fuXsCH2wyLu2N/n/n7vnfkZqV5nF3ns/nYoyAzzaXnnGJChmablAhQP36DG40YgRfYHLyNQ7QZIwGD2wmr5MeB2jwkoOxTyM98JXGMfr5+enSM7jn8/nsjvdvlz6r0W/N/e6TZUDJz8/P4/HoRkBtNNr6NKMMdYYNmlx7bv3zzz9z07zJaWH5xuSXhYPANosX0BTWUiYXfCf/+9dffz2fz65B9/u9vX2/37v5Uz9D3Y3lz6xOpmvS2gslTwqQhPGRLljo6MYslccHns/nr1+/uui046DugXMn5m8NGteuv958wbm95yWkh8/WX0xZ+8DBQyqbslbboOfz2S3dtKOh/krOeChUNQ7a9naviYL08G36W0PnvcSG5388Ho/HY3Dwfr8PtrYGZhs0GAQd4theqA8cYv+wqMtiOw7qP22r/xKDM/e/Bs1d9Ly2RJvTsOqBAsSXO2k+tUfboOb3ixX7DRnvzT+fz9q9+c7ipz+A11eZsFWl6xrUPbDdGusPhcbRmL7qp38NdOXLr2X5GXaqPxHOO2X6z9xGp68/COrvdPWfYdigxUsJ9rxF4APMndTtOKhNz2SABndub5Sufn72FN7ExZURNegET4fxS/fHQYMMFVaW792Dx093xvsGPlXXoHGA+vcZPOrNPgVmEAQDr3NSdMUZTMTKJhq0c28e+FSLvRuPfRZHQ7P7Ys2107Galr9O7+GlvMipMcjNePgyGZY3m4sB2+z85Hml8UbY4lBmuUEvMhF7kdLDa3qRE+Q5cylQISPGQfClDs/WIECD43Peo0Ev0nh4Za9wmmyYNl3XoFf4AwImTf4G6M3PtqpE7zEOAt5F/Wp0S4OAJA0CkjQIONEB1wcBVHrpfTGAMQ0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0CkjQISNIgIEmDgCQNApI0CEjSICBJg4AkDQKSNAhI0iAgSYOAJA0C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)

## 三、text-shadow 文本阴影

- `text-shadow`用来为文字添加阴，如果要给文字添加多个阴影，多个阴影之间用 `,`（逗号 ）隔开
- 当阴影个数`> 1`时，阴影应用的顺序为从前到后，第一个指定的阴影在最顶部显示。

语法:

```css
/*
	x偏移和Y偏移，值可以为正负整数
	模糊半径 为0或大于0的整数
*/
text-shadow: x偏移 Y偏移 模糊半径 颜色;
<style>
  .box {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    font-size: 100px;
    /* 红色阴影  蓝色阴影 */
    text-shadow: 0px 0px 10px rgb(251, 9, 9), 50px 10px 10px blue;
  }
</style>
<body>
  <div class="box">我</div>
</body>
```

![image-20211111164657518](https://www.arryblog.com/assets/img/image-20211111164657518.77319536.png)

## 四、文本溢出显示省略号

单行文本和多行文本溢出隐藏并显示省略号 `...` 在实际项目开发中经常使用

### 1、单行文本溢出显示省略号

```css
/* 文字不换行 */
white-space: nowrap;
/* 超出显示省略号 */
text-overflow: ellipsis;
/* 超出部分隐藏 */
overflow: hidden;
<style>
    p {
        width: 200px;
        height: 50px;
        border: 1px solid #ddd;
        line-height: 50px;
        /* 文字不换行 */
        white-space: nowrap;
        /* 超出显示省略号 */
        text-overflow: ellipsis;
        /* 超出部分隐藏 */
        overflow: hidden;
    }
</style>
<body>
    <p>当文字的内容超容器的宽度时，会显示3个省略号</p>
</body>
</html>
```

![image-20220725185707091](data:image/png;base64,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)

### 2、多行文本溢出显示省略号

```html
<style>
  p {
    width: 200px;
    height: 100px;
    border: 1px solid #ddd;
    line-height: 50px;
    /* 超出部分隐藏 */
    overflow: hidden;
    /* 超出部分显示省略号 */
    text-overflow: ellipsis;
    /* 对象做为弹性盒子模型显示 */
    display: -webkit-box;
    /* 块容器 中的内容限制为指定的行数。 */
    -webkit-line-clamp: 2;
    /* 弹性盒子对象的子元素排列方式为竖排 */
    -webkit-box-orient: vertical;
  }
</style>
<body>
  <p>当文字的内容超容器的宽度时，会显示3个省略号当文字的内容超容器的宽度时，</p>
</body>
```

![image-20220725191016905](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAABaCAIAAABMseHPAAAK20lEQVR4nO1dv2vjyhY+89i/4WJBXHjZdpvwCsul4XavWQkbIlePlOlMOtkpbLkLqV7KZSuNIUG+PN7rLri5IKVys20SFTZI3H9ibqEf80MjWU5gF+7MV3llaebM+c45c0aLvyBCCGgoiX/8bAM0fho09+riQ/np9fX1J9qh8WPw8ePH8vOHui80/n4Q0lvXfHWhuVcXmnt1oblXF5p7daG5Vxeae3WhuVcXmnt1oblXF5p7daG5Vxeae3VxhPt0bdvr9Ngg0Qqh1dORm9K1jZZR3Zd4zI/wtKq/ub1hKR6jxkltfAAAiJZIgGQ5TyuE8vsls5RYRplDSlA7D9hGK9aaaNnstxSPUYtlZratmvwlQ5X7FI/rRolW8glMd+/vzCNzdy7u/e8D+UoO2wD8yz5jw93O/7fZOJ4UPA3ImDwC3Aw4VmWhYM4JIaEHXkgIISTBFkDmUAbmDGAz6bKXylCw/D0hhJDIy0cc+Qk7VGbcHwHgS7qqA779zq5abv/GMST2H7At2jbj19kiFEiBl5eX4mPoFYtJsGXhhBBC9r7FXGxBg+X/1zt6kxeJo3lRNhd3LSTVi5Xp9oSQxB8VNEgRebAICQl5y4rxC8LCBXhReXMdyrkSf8QMVhnfwol4D3hh1Y2LkLU/wZYXUbNzFkqTqLU0ZDm+ZGAoJoQQac03XXIdTzGTodGqG1+TwDkDAOhcBEWIeKJv9r6V+ytwfoFG35FwwXonNx0Aom+T84jeRf1YcCO6RvRskRZFiqdrmy/jpsuR55qQ4unkfOp0AADS+LvVO2MWv2RTPFohhMaYL1+yvN8nCUdwGZSZtdFX55x6J38wjh/z0mI4m5lJ0zrPfnMGN9sioYMrhBAazJiMN5xNfqdooQxiUERHkpXxOAkXYpLxlFA6K6APsqGaYMtbCNlWRBiTl6RMTco97/38zsQf0cDKQk36VIItLl+Zx+kjkQdlrGdFiLGHorAzwRbPN/vZ8zj7JTVGnveVWd6T99KaXwuRWtFiWSUQEXrA1QOR+0igWcp96HGul5X6yAO6p/BWifHduE3k42fThR5TpUqbjyYYLP4ncB8KPDGeLMthU+Jx3POLeV/Nb43+pf99UNbSaDnYsb1MFQdso8EOJ2TO3VW2M4azAQA4c4JpbNR3K9FysMNJ8iWQ35P1aL8PCSFuP9uhhlu2DPbdkjYLJ4QEzlnE93XlBpE1X1dwR8iD0wHTJeQertgdpNgBmRCJPDGe5v9k+kRj8pg/eP1sSHtPoXY2xoTp8rcFF50GBlhUuRe9wPWdGTcUHecu7/DTtT2AkJlYaFkRQgh1JxvgG9cx/rOy3+f0RDDI/DLq9eiMKR6jbKLORUAiGLDnrmybN2cAQns/mAHA48RA+c4tOSLyGwrk23zGE9feZ07IN+Pl/5llFiHSdwm5hyl9xF7/WdnvAQDMOQkhTx7rUw8qiJbSUyXAId587sWVo2kxXYtjoYx7MY5YSOrbmRPse7cIGb/ZCZfNHedBfFpSmR+cX+pM67tCeYDHiYGMeEro9b5LovPJty01hoidATN7VvnzjvW814EiEKWHbHOex4EkC8sNeP4v56HkcjPpluf7PLkBwMJJcFG7SnNO3H7dl9H2ZjPpSmpbGu+sTz1zLm67CbZg5N+3S/33v9eLVt3JZuF5jxOjTW95Kg7xrvw88hNS8VTfJfPhqaPGz5vZHY6LkuP2y6qAEEKDm1PHa3W+b0DKrLKMhnR9u8O+x1/PKkH8vMliF/ou+XWL0CqCFI+R8XxNHpyWRV/gXlao62p+/upjOySEzF2XEDKNDYTe8IJJ3O9ZHOLKpRZgiCxtLxMRDvj2xvM+TwZ0OrHasRFGz1olsm2FWUG+KZTXCwOYFYn7PYv4mV/lAdsIXcF9cCFsBNH25rwH+PbGG3I5MBsgY/II3q8nvBATuK8WaknNz47LWTNFiEtny3uo4RYh7vVnHiXGBOzhGVRR3e/pS1Zz5k1rAzm3pDqyvOYX3x5iwJfunJC9D04lSHLQCJbWfGEFLfK+ut/T1mpw411fdOiVKdznXZs5XLAv7AazxbD3RwD4srcu3uzlRBBCyPB3if11QKT4He7r66v+Xc7fGwLF+v/x1IXmXl1o7tWF5l5daO7VheZeXWju1YXmXl1o7tWF5l5daO7VheZeXWju1YXmXl1o7tWF5l5daO7VheZeXWju1YXmXl1o7tWF5l5daO7VheZeXWju1YXmXl1o7tXFCdy3k7RrQLRCNWp3Tw16D8WP4wVVMRE1GgWnWsLigO2WvyqvuTNd15pcI6tXp2LH401qelU0/Qb7fUwLSPF4sMNJCDUSezWKXFRoJNNVqEWuqACcx6UOSvF4MFt43s2gngBu7YJMFyfEOMYpQPRtsmF+9c0+K1W/4dRTnlZ1fq5Ntr6b4N3gaOweQzXvTxLRa4kUj43J5zC46Jjz8NwxJE4XFBALnCyDcMBf4b5w8azioNwSMnfdvb8zuWpRBM12yKrWHPCVswHwIPt58zICAC/KNERCDwCeVoOb4nfae9+C7NfUOURlxOqi+u49XFWLULRExvN1cNGRiiIYzkb02OnCF801f7vi52tQKKlHtEJG8KXUVzJdEoJZKSpH874lzhy3cH3vkwXfY04lEGXEm9mdwd4OupT+QjXpMs583Z3A5/hqmoWS684JIUSUgYH4693O34dgIntso25g7132juN5D9C5CJJPt6xX07V9+6n0WCGKINN6pMpnreU2KMpRXl5eBMm5qphYg36XHIXQmXz9pUJCo6hfLnHZAvxEiT+iV7IyJrOk1HyrCDSKyD0TLpi8F4XOjsq1CTg2KSciUU7HPn5U1I6iWV+PM8XCiSB+dxL3me5PUrM8CydUp7VevVQudUTqBJWKeXkawgVUdAA5khgNvlpV1lJIksvakeeNgNHvyxZr3f+n1Y4pXxprJ79G0RtHVF9FHOVeyPumSvDjQRdfcl+7/sQf1W0lIvfiUyfnfQuD34LK+HvfonHWsAo5TtVW7Dh3djB9m4BWk1Qf06FEq6JPKTvbdG3To13ZxRzwLYRVna1Soq5iuW/d3J5y9stQl/ctl8n2j9FWVMoW0XAOzGUBWZw593mHn+LxACJ6unkDWpzvz5zgDX0EACdexQUsg0yschrX6LNFq25g3+USx3ga2DJhdXMeQq2C+3nvZO8IQumy5lyEUPMLHOKdRPELIUTfLjCynJJ4q7Y5WWOIkBF8SeqF+Vqhyj3VcT72bLRq+0YlWtEGmP7FAoq+m3wJvlZyN1rS0E7XV8GX+5owN91ChDNdr4rBUzydbBbD01X4j+f9zDQmj5tJt5KXAmreSSTYkqpotsLTynA23sLbOIZ4VjpguziFRcvy1Ff7ly3ecb5/2s5Gcs00Hike3/b2ZXXqOA/XcVd8rda5CKpRTDUnD/jqN7tJLrLvhnCLD9C5uCzETJnj3Gk4nvfFFl7mZSmDJtHOqyDd/lYoIza+0BRqfv5OKdMJnruEkOtngy0hJ6MMxlodbXq+EnvjFq2ftHXyQkLChfSPCtSAtmz0/nc0ns293pE+XzYaW/Mlt8n+TEI7O5mDUm3PyMnGN0GgWOvrKQStr6eRQ3OvLjT36kJzry409+pCc68uNPfqQnOvLjT36kJzry409+pCc68uNPfq4gP7j9fX159lh8aPB/0/XA3VoGu+utDcqwvNvbrQ3KuLvwCJ1On5c+ACOwAAAABJRU5ErkJggg==)

注意事项：

只有当元素的高 = `line-height 大小 * -webkit-line-clamp（指定行数）` 时，才能显示出正确的效果。

## 五、opacity 设置元素不透明度

opacity 属性指定了一个元素的**不透明度** ，其属性值如下：

| 值                 | 描述                                                    |
| :----------------- | :------------------------------------------------------ |
| 0                  | 元素完全透明（即元素不可见）                            |
| 值在 0.0 -1.0 之间 | 元素半透明（元素后面的背景可见）,值越大，元素透明度越低 |
| 1                  | 即元素完全不透明（即元素后面的背景不可见）              |

- opacity 的值是一个 0.0 到 1.0 范围内的数字值，如果值超出这个范围，也有效，但是会被解析为在取值范围内最靠近它的值
- opacity 设置透明度时，其里面的子元素和内容也会被透明掉。所以也可以用 `opacity: 0;`来隐藏一个元素，及其里面的子元素一起隐藏掉。

```html
<style>
  .item {
    width: 100px;
    height: 100px;
    background-color: pink;
    float: left;
    margin: 10px 10px;
  }
  .item1 {
    /* 不透明度 */
    opacity: 0.8;
  }
  .item2 {
    /* 不透明度 */
    opacity: 0.5;
  }
  .item3 {
    /* 不透明度 */
    opacity: 0.1;
  }
</style>
<body>
  <div class="item item1">.item1</div>
  <div class="item item2">.item2</div>
  <div class="item item3">.item3</div>
</body>
```

![image-20220725154757541](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAACeCAIAAABo2/zFAAATYklEQVR4nO3de3BUVZ4H8G8n3ekkdJIOiUQGSALhZQgbCZkaWd0ZgZESiIxaOtTuZHetwLJaRWa1YGQHJqu1WdgaB8Ypk1klJYyOwRVhcQQ0gkRYdAYtXjpEBM3DsKCEScir8+g8+u4fp3Nz+0FuHt33dt98P+Uf6fvoe7rp/t5zfuf21SRJEoiIhhShdwOIKAwwKYhIHZOCiNQxKYhIndl7wbmLejQjPOVkjn7f+m8C1w6jS/vO6Pft6Q1cO4wuyjLESvYpiEgdk4KI1DEpiEidT51CwdnTu+PNPQA2/Pgn1iHHMDQWfX39750+BeD+7y4ymyP1bo5hSZLU1tkBID52gslk0rs5YWaopPDS6nD84uWXVtx19/K7FgWpNfXXr+88dGDT3/5Dgs0WpEOEvi6n83/+94PsjFnzM2YG9plFJJ29/IV4uHjBwu9n5wT2EGHE5XK1OBwxVmuM1RrwJ+9yOlsc7eJvuy0uGIfQ2FBJYY2ybM5/TH7Y4nA0tbUEqR0ihk5d/POizL8K0iFCltkcmbfoHvlhZ3e3o6szGAf6or4uPjb2mcf+CQN5dPjUR+OnI2MymRImDJ6BXJLkcrmCcaCevl4Ak5OSxd9Nra0Awj0sRtCnCJ7Pqr96+fDb/7H28T9VXXj34z/q3RzDUnZSYqzWH9yZ886pj1o7HEkJCTq2yniizBb5i2WJNMdGR/e7+nVtUQAMt07x2tF3Xjp4AEDR7heLdr9YXPCEGIPUX7/+87LSL69eAfDw95fIFY2XD//hs+rqtXk/+uXrr4q1u54umpuavuPNPQdOfgDg8VUPr817UBwoe+askic3BveFhjBlneJPn392/PxZAAc+PH7gw+MP/81i8fVuam3dd+JYQ/NNAAvn3CF3BE5+du5KQ4P4zou1BStWTZ6YLI8yxvkQQ0lZp+jo7mrv7ATQ4mhvcbTLA4S+/v6W9vbe/j4AsdHRckXD0dXZ09tni41pc3SItUkJCZZIc1tnR2d3N4C42FhbTKyOry7YhtunWJv34H25d/28rPTvl62U6xQiJsQSESs73twjh8Wpi3+enJz8u399BsCON/esea4YwK6nizbnPyZ2nJKcErySR5j6fnbOvPSMfSeO3Z2VLXcBREyIJSJW3jt9Sg6Lmm+u2uPi1q58EMB7p0/tfvcggIIVq/IW3SN2TLTF+y15tLS322JiY6OjNXx9ocIWExsdZW1pb58QEyOPC0RMiCUiVto6O+SwcPb2RDojRP+rrbNDjCmSEhISJtjEjpERkb5DjO6env5+V1z4h8joZ0mdPb17jr2XNWPmkpxcANYoy8q77q6qrb5+s0lsMHtq6k9+eL81yiJWAXh81cPZM2cBuH1iUtaMmeerLzt5CZ2avr7+UxcvTJ2UckfadABmc2R2xqyrNxpaOxxig5TEiYsy55vNkWIVgMULFk6blAIgYYJt6qSU+hvX+/q8e7//d6PhwIfHU1NSwn38HCiSJHV0d1ks5uioKAAmkynGau3t7esfqGVYIs0TomNMJpNYBSAuNjbKbAEQGRFhsZh7+nrlezg4ujq/bWr8tqmx39U/MT4+IiLsL0cY/Qu4frOpqrZ6wcw58gSq3RYHQC75JsXb7QNTGHZb3Oypqd+dO088tEZZJtnto2/1eNLa4bh6oyFt0u1y3THWGg2g09ktHir7BbHW6JTEidMnTxEPzebI+Fg/Z7MLNdW73z24cM4dfz0vO+gvIEz0u1y9vX1RZos8gRphigDgktxJEREREaFYZYk0R1ncn3yTyRTpmQW2mNjJScmTk5KjLJZvmxq7nE6NXkbQjLWiKcoWyiXfNDaKjgMFkChbKJe0tLeLjsOIiCmPmm+usn7hlyhbKJf097vG8i2JMlvstrgup9NqsYR1z2KsSbHr6SLmggYKVqwaRS54ETHh6Opc/9CPOd/hV1JCghhQBFBkZITL5XJJUhjnxFhGH6LWcPrS5wFsDfkStYa6b6+N/anEP9Y/3p/HmPDlrjX0Br5w1t/vUo5cwpR3UrQ6HIW/2b6t/BXfWqPdZkuKt19rbBAPRZ3ypYMHKj4+JZbUX7/+wv43WKQcji6ns/xoxeFTH/nWGmOjo20xsc2ONvFQ1CmPnz97oaZaLGlqbX3/zCe+O6oe8UpDQ3bGrHFVwnS5XDfb2lo7HL73i40wmSIiIuQrHUSdsr2zU64p9PX3t3V2jPRGs5IkObo65Wu6evp6WxztMVZrWA89MKLRR4LNtjbvR2ueK37p4AFxPUX2zFm7ni5a81yxKFUor6egURPXRO1+9+Dx82fF9RTTJqUUrFi1+92DolShvJ5ipHzrHeO2YBEREWGLjWlqbW3v7BTXU0SZLUkJCU2traJUobyeYvhMJlOsNbrF4XD29gCwRJpvsyeaI8P+KliTd2TyTjbDxzvZaIN3stEG72RDRGPEpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidUwKIlLHpCAidbomRYdDz6MT0bDplxQ3vsWmdejt0a0BRDRsOiVFbw92PItr9XjvLX0aQEQjoVNSvLEbX1YBwJG39WkAEY2EHknx+XkceM3997V6fHJShzYQBVVbq94tCDDNk6LlJrY/47Fk726t20AUVI038OgKOJ16tyOQNE+Kkq1oafJYUvcV6r7SuhlEwfPkP6P2K7xfoXc7AknbpDi0F+c+9rOc3QoyjFd24pM/AkDZC3o3JZA0TIovP8drO/2v+uQkrl3RriVEQVJbje1b3X9/UYUvqnRtTSBplRS9PXhhK3qdmJLmvcqeBABH/qBRS4iCxOnEpp/C2T24pKxEv9YEmFZJ8dKvMGcedu7Hw/neq1YXoOjX+OQkWm5q1BiiYNj5Aj4947Hk/Qo03tCpNQGmSVK03MTqAhRuwaTJftbOmIWc7+HXr6C5yc9aorDw6VmU/Mp7obMbr7+qR2sCT5OksE8czIgJNu+1YjwywYbps7RoDFHAiXGHX//9e2NMl2o+S2qL83hoT/KTHUThZVsRam8x09/YYIzpUr1/dT6D/QgKcyc/wOuvDLWBIaZLNU8KMdMhS2dSUDhra8WmfwFucc5LTgEMMl2qeVJYLB4P02dq3QCiAHrmafxgMU6cxbpCP2sLN+L5MsQnGGC61Kzz8af6XF5BFC4ab2DjLzBl2i03yMzCnQuRmYVNP0XjDSRP0rBxAaZ5n8JropRJQeEredJQMQHgjiwAmDET5W+hrU2bRgWJrhXNKWmwROnZAKNytOvdgvFnmk9kzJgFq9X9t9WKGeE90NYjKSwDbx87FMFw/Roe/zv08LaDesvM0rsFgaRHUiROBAATMHueDkc3vP/cgiu1ePsNvdsx7s011Mdbv9GHBExJ1e3oRrXnZZw/DQBv79O7KeOMmBBVuoN9ijGSL8qcmq7D0Q2s+hJ+91/uv6/U4sNKXVszzsglCRlHH2MlkiIikn2KQOrpwbM/Q4/iJwZyapD24hPCek7Ul36jj/gE3Q5tSDufx5VajyXVl1B9SafWjD9x8R4P78zVqR3BoktFMxkAbvMZ19GofXoa+37vZzm7FZrxOvOF+ZyoL11mSS0AcPtUHQ5tSI52PPsz3D7Fz6oPK3GlTvMGEZC9UO8WBJjP1dw5mUE/ZpIdABYs0OJYISvtOwF7qn/fjOdfhLMb6zzvJ3ZbCv7SgOPv4N+2BexYYSfKor5NoFij4ewGTICEuXM1PXTw6dGnmDINJmDefB0ObTxtrXhyE+5dipmzvVdt3YFX9+PIO/iLQW7QFupumwQAJgnWaGQa7eOt0y/ETJFI5QWagSAPjzNmDZzTBiy6B/EJqDiJq1fcH2LSgGRChgHvpaBHnyI+AWYz5z4CT/kBzZzvfofjE4x3fgttkiH7y3okxZonMHkKkyLwlAOQRffo147xatrA9UHGujpT0Ol6ipNnmRSBp/yAfu9u/dox7rFPQSFNOfpgn0JHRhzuMSkMRB59yEUK0pK4mNCeaMg3n0lhIGL6A+xQ6ET8SGyqMX/NxKQwFjEAYZFCNyZM9nexbPhjUhiLGICwT6GL+ASYJGQv0LsdQcGkMJY7FwL8na5OxM9JpxjzB01MCmNZ8wQvx9STKdJ4vw0TmBSGc+ay3i0Yr8TFx743vzIEJgVRgBj64uOQSooa5CUir1TvZhCNlnEvPg6ppPByFOmJKKsZ8X51pUhPRFoi0obcvbLQvU1aInhvWqIh6f3/JfWQgcPNg4/qvhzNc9SVYnERdjVjqfg7FziDdRnem5UtxdZz2C1vlujehYj8CeU+xSjUoLAIWcXu7/z09XgE2PYbP5sdPIf5nptVHNW0pURhZThJcXSwM+/VUd+YiLxSj97+Rs/vW9nSwR29VomqhFjlrk0o6hQbE3FvESRga657ELExEeme/+N5cXSP6kYNqoBVywe3WZ4PXARvJUk0NmpJUVmItNXYfAb1zahvxu58FHgO/i8UYfFlfN2M+macKMb+1YOJUFkIlLl3FKvkHetKkZ6LuXvda0vgXSnY3owTxTABW86gvhnrMrA8H1K5YrOj2O8ZChgYsGQoxhoz5gDn4Hl3eyADT+XjQpH72epKsR9YvkzlrSAaz6ShVEsr7dKGIx7LNtiltPWKv5dItYq1O5cMrvV9qpUlPn/fahtJqi2R0uzSzuqBtUc8Hh5b731osTDVLh1TLBFPckzyQ6xK9XkJRORjyD5FXQWqgNme5UCv/nzWQ5iuWJuR6a+3fxTpubggP/QZIwzLMjwCHKxwP6ooxyObPA49ImVLsfgtHG9GfTO+3oTFvoMjolEw7Ez/MOoUGT4TB5Jvf97fWnkaMv0Qvm7GowMb+I4Rhml5PqreQh3cQ49RjxfqSrHtHHZVDgTNMuzKx/5fspxBgRbkmX6hslCDbBpGUtT4NNSUgxm33t699ijWlLurDF+XDOtpVS19ADiH92tQeQjI9zOpOWMOTJ7PXHsZ8Glt7WVIPjv6KWcYgGFPcaEqA4ebcXi9+9EYZ/pFgW9b7q3D4ijSE1FQPrq2jsiQSTF9ObKALz1bWVEOZA52+90necVaMR7x7jgcxX7Pp5XHESOwDJtzcLACFeV45IFhNVhuj5IIFCXf7DCmYJ7ilNvwerbRG+ZMP1BZ6N1bDyqVOoaoESrriMqS4Qa7lKqoQXqsPSKlKaqhfreU19aWSMckn0qn5zPIW6YtkVYqi5Seeynb4FHO9NxMWZcVB/JTYTUc7yLxSPZSvqV+n0H804RobfiIu3ot/lNWuDfYpZUlg+XtVJ+P3M4lgzt6rRIfqlTlZ1vxMdugOKL4Enl86hRH9/hwHvF+h/0W7/08SXCpJYUkebyJXi0WTRRfTt9/A+WO4m1Svh7l2lvNicjPPPjGVUsrvd7uW++VeutAkYb+BBjUaJLC533z/bgLqh9ovfg928kPxfdZfkXiLZI/D8fWD27p9e55ben3bOe1i/fcnBwKir18Z+uGmL+TX0JIJMUQNGmip2pp5cjPiiHHiKe4EE0KQ8/0yy8h+F/DcLuau64CVTm4b+TzJqHDmBezATUXPQpYIcLAM/3aCrek+G1RGL25/tTg+XI8unfwR2tLS/CoZ8nKlIPjA7NF09djcw72HxrcWN7RozA8UAbbvmxwR9UfvC19wGOqqPIQIFJYUcAfUa1XKg/RcqbxZvo1Fz5JIX5CcknxZQhHBj7Frat0d2fqm7Elx7ujpC/jzfRrbmxJsV0xdRxs4oOo2eGCyvCnuHVlmD+6ifBAM+pMv+bCp09hJMY/xWVgLlAVCnf0zMBT+dinKOhUFmIfsEvxBkrnUFjqsfap9QAwfTaguB3BxtWKgdjAjwzlElJdqZ8Bl3gGr5y67yFUvYVLylxWXiA30GDlzxdFe3S9jo5Joa3xcoqrwSUga87I2xMES0vcVzqK7tiaizjhedei+cV46rJ7bUG5+/5GALAMx4uxf7V71ewzHtc4iaeV1xbCX2FoGXblY99qjyvWpi9H1jlU+ctl+ZlFnTstEfcWhco9loI9uULeDHsxm2LCb4PP7G/I4kz/8ITU3fHGh6UlODEHi3OxFQBgysGJZo9TtHyKE7xOcYtXYx8AYMsZPJqLS15PO7B2fjEO+x57GXblo2A19gFbBm4aOH05sorUTnFAgW97PG0vQ16iu8hqysGJSt2H1iFKzPSXhNlMv0mSxsUPHsLGxkRcKta2cFuDvFys8ne30fFA+zd8YyKwN+ym8FinGPcMcDFbuAjnmX6OPsa93xbhkb3jd6SwvVl9m0BZV4l12h0tsNinGMfC+RRHGmOdgojUsU9BROqYFESkjklBROqYFESkjklBROqYFESkjklBROqYFESkjklBROqYFESkjklBROr+H+W5eLm7ABQ9AAAAAElFTkSuQmCC)

**opacity 的属性值不为 1 时，元素会创建自已的层叠上下文**

```html
<style>
  .box {
    width: 100px;
    height: 100px;
  }
  .box1 {
    background-color: skyblue;
    /*
        opacity的值不为1时，会创建层叠上下文
        即opacity:0.7时，.box1会在.box2的上面显示
        */
    opacity: 0.7;
  }
  .box2 {
    background-color: pink;
    margin-top: -50px;
    margin-left: 30px;
  }
</style>
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
```

| .box1 未设置不透明度时或不透明度为 1 时                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | .box1 的不透明度 opacity: 0.7 时                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![image-20220725155724533](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACiCAIAAAAcBLIvAAAB0UlEQVR4nO3csU3EQBBAUYxcAo0gkdOWS6At50i0QAFENLCXnkgc3LHmo/cyW5Zmra9JdxljPPC3PZ59AI6JFCBSgEgB6/XD28fXWefI2Z6fps2ySQEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAEiBYgUIFKASAHr8Sf3sH1/zhk0z/5rf/T68uOFTQoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRAoQKUCkAJECRApYxhgz5uzvM6b8D26OLBIpQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJEChApQKQAkQJECph1cyQ3sEkBIgWIFCBSgEgBIgVcAF/SE5ve8jlRAAAAAElFTkSuQmCC) | ![image-20220725155812560](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACgCAIAAABsXnJCAAABy0lEQVR4nO3csQkCQRBAURVji7AGc5uwTCsyMDEWxAbW/MDA4O74+F52HOwufCad7RhjQ8du7QfwG8FiBIsRLGY/+b7e36u8o+hyPCx/qQmLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLESxGsBjBYgSLmW4kndHztdxdy3jc5jr5fPr2x4TFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFTDeSXo6Hua6ab3/nPzFhMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMYLFCBYjWIxgMdsxxtpv4AcmLEawGMFiBIv5AD8pEI2s2hIdAAAAAElFTkSuQmCC) |

**对比学习**

| 属性                                | 说明                                          |
| :---------------------------------- | :-------------------------------------------- |
| `visiblity: hidden`                 | 隐藏元素，但元素还占着原有的空间，在 DOM 树中 |
| `display: none`                     | 元素隐藏，不占着原来空间，不在 DOM 树中       |
| `background-color: rgba(0,0,0,0.1)` | 仅背景颜色透明，并不影响元素中的内容          |
| `opacity: 0`                        | 元素透明，连同其内容和子元素一起透明掉        |
| `overflow: hidden`                  | 内容超出部分隐藏，影响的是子元素              |

## 六、filter 滤镜-图片模糊

`filter: blur()`函数用于将高斯模糊效果应用于元素（图像）

**语法：**

```css
/* 元素模糊度为50px */
filter: blur(50px);
<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    /* 模糊度 */
    filter: blur(20px);
  }
</style>
<body>
  <div class="box"></div>
</body>
```

![image-20220725161801474](data:image/png;base64,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)

注：

[点击查看，更多内容参考官网 👆 (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

背景模糊效果

利用 `filter: blur` 与 `background-size` 的结合来实现背景模糊效果

```html
<style>
  body {
    margin: 0;
  }
  .box {
    width: 100%;
    background-color: #000;
    height: 220px;
    overflow: hidden;
  }
  .item {
    height: 220px;
    /* 背景图片 居中 */
    background: url(./images/tx2.jpg) center;
    /* 背景图片大小 */
    background-size: 150%;
    /* 元素模糊度 */
    filter: blur(60px);
  }
</style>
<body>
  <div class="box">
    <div class="item"></div>
  </div>
</body>
```

![image-20220725164313144](https://www.arryblog.com/assets/img/image-20220725164313144.252c990a.png)

## 七、object-fit 图片裁剪

`object-fit`属性指定**可替换元素**的内容应该 如何适应到其使用的高度和宽度确定的框

[可替换元素，点击查看完整官方详细内容 👆](https://www.arryblog.com/guide/css3/：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)

`object-fit`通过以下属性值，来切换被替换元素的内容对象在元素框内的对齐方式，有点类似于`background-size`。

- 但是 object-fit 在对齐时，是在元素框中间向两边的方式来填充
- 而 background-size 默认是从左上角向右和下来填充的，如果要设置以中间向两边，需要设置 `background-position: center;`

| 属性值     | 描述                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------- |
| contain    | 被替换的内容将被缩放，保持元素的宽高比，全部填充在内容框内。                                  |
| cover      | 被替换的内容将被缩放，保持元素的宽高比，填满整个内容框。                                      |
| fill       | 被替换的内容正好填充元素的内容框。内容可能会被拉伸或压缩变形                                  |
| none       | 被替换的内容将保持其原有的尺寸。                                                              |
| scale-down | 内容的尺寸与 `none` 或 `contain` 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。 |

```html
<style>
  img {
    width: 250px;
    height: 200px;
    border: 2px solid blue;
  }
  .contain {
    /* object-contain 保持宽高比 填充在内容框中 */
    object-fit: contain;
  }
  .cover {
    /* cover 保持宽高比，填充满整个内容框 */
    object-fit: cover;
  }
  .fill {
    /* fill 被替换的内容正好填充元素的内容框。内容可能会被拉伸或压缩变形  */
    object-fit: fill;
  }
  .none {
    /* none 被替换的内容将保持其原有的尺寸 */
    object-fit: none;
  }
  .scale-down {
    /* scale-down 表示被替换内容尺寸为 none和 contain中最小的那一个 */
    object-fit: scale-down;
  }
</style>
<body>
  <img src="images/hua1.jpg" alt="" class="contain" />
  <img src="images/hua1.jpg" alt="" class="cover" />
  <img src="images/hua1.jpg" alt="" class="fill" />
  <img src="images/hua1.jpg" alt="" class="none" />
  <img src="images/fish.png" alt="" class="scale-down" />
  <img src="images/fish.png" alt="" class="contain" />
</body>
```

![image-20220725174924868](https://www.arryblog.com/assets/img/image-20220725174924868.08c364fa.png)

案例应用：防止图片拉伸或挤压

- 我们预想的是用户按 1:1 的大小来上传头像图片，但实际用户上传的头像比例是五花八门，就会造成图片被拉伸或挤压变形。
- 我们可以添加`Object-fit: cover`来等比例裁剪图片尺寸，这样图片就不会被拉伸或压缩，不过会有一部分图片被裁剪掉。

| 设计师设计效果 （图片尺寸 1：1）                                                                              | 实际效果：图片尺寸（1:1.4）                                                                                   | 处理后效果：保持原尺寸比例裁剪图片                                                                            |
| :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------ |
| ![image-20220526172933378](https://www.arryblog.com/assets/img/image-20220526172933378.c164d03b.c164d03b.png) | ![image-20220526173100167](https://www.arryblog.com/assets/img/image-20220526173100167.26d8e84c.26d8e84c.png) | ![image-20220526173221648](https://www.arryblog.com/assets/img/image-20220526173221648.c1af9437.c1af9437.png) |

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    /* 超出部分隐藏 */
    overflow: hidden;
  }
  .box img {
    width: 100%;
    height: 100%;
    /* 保持图片原有尺寸来裁剪 */
    object-fit: cover;
  }
</style>
<body>
  <div class="box">
    <img src="images/tx2.png" alt="" />
  </div>
</body>
```

## 八、防止拖拽文本域

resize 属性规定是否可由用户调整元素的尺寸

```html
<style>
  .content textarea {
    /* 文字与多行文本框垂直居中对齐 */
    vertical-align: middle;
    /* 不允许调整尺寸大小 */
    resize: none;
  }
</style>
<body>
  <div class="content">
    补充内容：
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</body>
```

## 九、calc 函数

calc() 函数用于动态计算长度值

```css
/* 最终计算得到width:300px */
width: calc(100px + 200px);
```

**calc 函数使用是注意点**

- calc()函数支持 `+` `-` `*` `/` 运算；
- 运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px);`
- `*` 和 `/`时，其前后可以没有空格，但建议留有空格；
- 任何长度值都可以使用 calc()函数进行计算；
- 可以使用百分比、px、em、rem 等单位；
- calc()函数使用标准的数学运算优先级规则；

```html
<style>
  .box {
    /* 宽始终比浏览器小100px */
    width: calc(100% - 100px);
    height: 200px;
    /* 水平居中 */
    margin: 0px auto;
    background-color: skyblue;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

## 十、var 函数

在讲解 var 函数前，我们要先来了解一个新的选择器

### **1、:root 选择器**

root 选择器用匹配文档的（html)根元素。

```css
/* 页面背景色为红色 */
:root {
  background-color: red;
}
```

**:root 与 html 择器的区别**

两者的唯 一区别在于`:root`选择器的优先级要高于 html 标签选择器

```css
:root {
  /* 背景黄色 */
  background-color: khaki;
}
html {
  /* 背景天蓝色 */
  background-color: skyblue;
}
```

> 因为`:root`的优先级高于`html`标签选择器，则最终的浏览器背景以**khaki 黄色**呈现。

### 2、var 函数解读

var() 函数用于插入自定义的属性值，如果一个**属性值**在**多处**被使用，该方法就很有用。

- 自定义属性一定要以 `--` 开头
- 自定义属性会沿着父元素一直向外找，以最近找到的为主。写在后面的自定义属性会覆盖写在前面的

```html
<style type="text/css">
  :root {
    /* 自定义属性 */
    --font-color: red;
  }
  .box {
    /* 自定义属性 */
    --font-color: blue;
  }
  .item {
    /* var函数调用自定义属性 */
    color: var(--font-color);
  }
</style>
<div class="box">
  <div class="item">自定义属性的寻找原则：就近原则</div>
</div>
```

![image-20220724011435533](data:image/png;base64,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)

- 通常自定义属性是写在 **:root 选择器**中 ，并且 **:root 选择器会放在 css 的最上面**。
- 这样所有的选择器都能用到这个自定义变量属性。

```html
<style type="text/css">
  :root {
    /* --开头，表示自定义属性 */
    --font-color: red;
    --font-size: 20px;
  }
  h3 {
    /* 字体颜色为红色 */
    color: var(--font-color);
  }
  p {
    /* 字体大小为20px */
    font-size: var(--font-size);
  }
  ul li {
    font-size: var(--font-size);
    color: var(--font-color);
  }
</style>
<div class="box">
  <h3>标题</h3>
  <p>文本内容</p>
  <ul>
    <li>li中第1条</li>
    <li>li中第2条</li>
  </ul>
</div>
```

![image-20220730215955406](data:image/png;base64,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)
