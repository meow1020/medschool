
function jump(anchor) {
    
    var aTag = $(anchor);
    console.log(aTag);
    $('html,body').animate({ scrollTop: aTag.offset().top }, '300');
}

var app = new Vue({
    el: '#app',
    data: {
        steps: [
            {
                text: '將講糖小學堂直立於診間衛教桌上，翻閱側標籤上標註各主題分類，找出本日衛教主題。',
                img: 'step1.png',
            },
            {
                text: '搭配圖文講解衛教資訊，手機掃描每頁右上方QR Code，獲取更多線上衛教資訊。',
                img: 'step2.png',
            },
            {
                text: '鼓勵糖友下載安裝講糖APP，在家也要溫習衛教資訊，建立良好的生活習慣，改善血糖控制成效！',
                img: 'qrcode.png',
            },
        ],
        showListIndex: 0,
        lists: [
            {
                text: '認識糖尿病',
                textHtml: '認識<br>糖尿病',
                content: {
                    title: '介紹各類糖尿病，引導新手糖友認識糖尿病致病機轉。',
                    listPoints: [
                        '初次診斷糖尿病的常見迷思',
                        '說明胰島素在身體裡如何運作 ',
                    ],
                    mainImg: '01-1.png',
                    subImgs: [
                        '01-2.png',
                        '01-3.png',
                    ]
                }
            },
            {
                text: '糖尿病診斷',
                textHtml: '糖尿病<br>診斷',
                content: {
                    title: '破除糖尿病診斷迷思，引導糖友認識糖尿病診斷標準。',
                    listPoints: [
                        '糖尿病診斷常見疑問',
                        '不同類型糖尿病的診斷標準',
                    ],
                    mainImg: '02-1.png',
                    subImgs: [
                        '02-2.png',
                        '02-3.png',
                    ]
                }
            },
            {
                text: '檢驗數值',
                textHtml: '檢驗數值',
                content: {
                    title: '糖友健康檢查時需特別注意的檢驗數值，與如何判讀檢驗報告。',
                    listPoints: [
                        '該怎麼判斷檢驗報告的結果',
                        '糖友需要留意的檢驗數值',
                    ],
                    mainImg: '03-1.png',
                    subImgs: [
                        '03-2.png',
                        '03-3.png',
                    ]
                }
            },
            {
                text: '藥物治療',
                textHtml: '藥物治療',
                content: {
                    title: '介紹各類型糖尿病口服藥物，說明藥物如何幫助身體控制血糖。',
                    listPoints: [
                        '介紹第二型糖尿病口服藥物',
                        '血糖藥如何幫助身體控制血糖',
                    ],
                    mainImg: '04-1.png',
                    subImgs: [
                        '04-2.png',
                        '04-3.png',
                    ]
                }
            },
            {
                text: '排糖藥物',
                textHtml: '排糖藥物',
                content: {
                    title: '介紹SGLT-2抑制劑控制血糖作用與使用注意事項',
                    listPoints: [
                        'SGLT-2抑制劑如何排糖與控制血糖',
                        'SGLT-2抑制劑可能的副作用與舒緩方式',
                    ],
                    mainImg: '05-1.png',
                    subImgs: [
                        '05-2.png',
                        '05-3.png',
                    ]
                }
            },
            {
                text: '腸泌素類似藥物',
                textHtml: '腸泌素<br>類似藥物',
                content: {
                    title: '介紹GLP-1促效劑控制血糖作用與使用注意事項',
                    listPoints: [
                        'GLP-1促效劑如何治療糖尿病與控制血糖',
                        'GLP-1促效劑可能的副作用與舒緩方式',
                    ],
                    mainImg: '06-1.png',
                    subImgs: [
                        '06-2.png',
                        '06-3.png',
                    ]
                }
            },
            {
                text: '胰島素',
                textHtml: '胰島素',
                content: {
                    title: '介紹各類型胰島素藥效與功用，及正確的注射方式',
                    listPoints: [
                        '各類型胰島素對身體的作用',
                        '胰島素注射部位與須知',
                    ],
                    mainImg: '07-1.png',
                    subImgs: [
                        '07-2.png',
                        '07-3.png',
                        '07-4.png',
                    ]
                }
            },
            {
                text: '血糖監測判讀',
                textHtml: '血糖監測<br>判讀',
                content: {
                    title: '說明自我血糖監測驗血糖的重要性，及如何有效判讀配對血糖數值與處理異常現象',
                    listPoints: [
                        '如何判斷血糖數值與調整生活型態',
                        '正確驗血糖方式與常見錯誤',
                    ],
                    mainImg: '08-1.png',
                    subImgs: [
                        '08-2.png',
                        '08-3.png',
                    ]
                }
            },
            {
                text: '連續血糖監測',
                textHtml: '連續血糖<br>監測',
                content: {
                    title: '介紹CGM如何監測血糖，與對血糖控制的益處',
                    listPoints: [
                        '簡介連續血糖監測儀',
                        '如何使用連續血糖監測找出血糖隱藏問題',
                    ],
                    mainImg: '09-1.png',
                    subImgs: [
                        '09-2.png',
                        '09-3.png',
                    ]
                }
            },
            {
                text: '糖尿病周邊神經病變痛',
                textHtml: '糖尿病周邊<br>神經病變痛',
                content: {
                    title: '說明DPNP常見症狀，及如何預防DPNP',
                    listPoints: [
                        'DPNP常見症狀',
                        '糖友日常足部保養教學',
                    ],
                    mainImg: '10-1.png',
                    subImgs: [
                        '10-2.png',
                        '10-3.png',
                    ]
                }
            },
            {
                text: '運動',
                textHtml: '運動',
                content: {
                    title: '說明規律運動對血糖控制的幫助，及如何運動以達到最好的效果',
                    listPoints: [
                        '規律運動如何影響血糖控制',
                        '如何做運動對血糖控制最有幫助',
                    ],
                    mainImg: '11-1.png',
                    subImgs: [
                        '11-2.png',
                        '11-3.png',
                    ]
                }
            },
            {
                text: '認識低血糖',
                textHtml: '認識<br>低血糖',
                content: {
                    title: '說明低血糖症狀，及低血糖的緊急處理方法',
                    listPoints: [
                        '低血糖發生時機與症狀',
                        '低血糖救命「15法則」',
                    ],
                    mainImg: '12-1.png',
                    subImgs: [
                        '12-2.png',
                        '12-3.png',
                    ]
                }
            },
            {
                text: '糖尿病飲食須知',
                textHtml: '糖尿病<br>飲食須知',
                content: {
                    title: '認識醣與糖、辨識六大類食物，及營養標示醣類計算教學',
                    listPoints: [
                        '糖與醣對血糖影響的差異',
                        '日常飲食如何吃出好血糖',
                        '營養標示算醣教學',
                    ],
                    mainImg: '13-1.png',
                    subImgs: [
                        '13-2.png',
                        '13-3.png',
                        '13-4.png',
                    ]
                }
            },
            {
                text: '年節飲食指南',
                textHtml: '年節飲食<br>指南',
                content: {
                    title: '台灣10大年節飲食攻略，教糖友控糖從飲食控制開始',
                    listPoints: [
                        '10大年節飲食宜忌',
                        '年節飲食含醣量一覽',
                    ],
                    mainImg: '14-1.png',
                    subImgs: [
                        '14-2.png',
                        '14-3.png',
                        '14-4.png',
                    ]
                }
            },
            {
                text: '專家開講',
                textHtml: '專家開講',
                content: {
                    title: '12類糖尿病衛教影音，由醫師、糖尿病衛教專家現身講解！',
                    listPoints: [
                        '如何預防與治療糖尿病併發症與共病症',
                        '左流右肺疫苗宣導',
                        '糖友出遊必備須知',
                    ],
                    mainImg: '15-1.png',
                    subImgs: [
                        '15-2.png',
                        '15-3.png',
                        '15-4.png',
                    ]
                }
            },

        ],

        showList2Index: 0,
        list2s: [
            {
                text: '糖尿病衛教學會</br>杜思德醫師推薦',
                datas: [
                    {
                        link: 'https://players.brightcove.net/5507778861001/default_default/index.html?videoId=6068074745001',
                        image: './assets/img/videoshare1.png',
                        about: '中華民國糖尿病衛教學會理事長 專題介紹',
                    },
                ],
            },
            // {
            //     text: '講糖小學堂</br>核心概念',
            //     datas: [
            //         {
            //             link: '',
            //             image: '',
            //             about: '',
            //         },
            //     ],
            // },
            {
                text: '講糖小學堂</br>使用經驗分享',
                datas: [
                    {
                        link: 'http://210.65.89.114/TADE/TADE_Video2/tade/07072019/s12/04/',
                        image: './assets/img/videoshare3.png',
                        about: '衛教師 林冠怡小姐  2019衛教學會年會分享',
                    },
                    // {
                    //     link: '',
                    //     image: '',
                    //     about: '',
                    // },
                ],
            },

        ]
    },
    computed: {
        isUnder1024() {
            return window.innerWidth <= 1024;
        },
        isUnder768() {
            return window.innerWidth <= 768;
        },
        showList() {
            return this.lists[this.showListIndex];
        },
        showList2() {
            return this.list2s[this.showList2Index];
        },
    },
    methods: {
        showModal(listIndex) {
            this.showListIndex = listIndex;
            $('#list-modal').modal('show');
        },
        showModal2(list2Index) {
            this.showList2Index = list2Index;
            $('#list-modal2').modal('show');
        },
    }
})