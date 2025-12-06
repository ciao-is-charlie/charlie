const websiteData = {
    config: {
        bannerUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
        backgroundColor: "#1a1a2e", 
        themeColor: "#b8c6db", 

        // --- 【功能 1】分區字體設計 ---
        // 你可以在這裡分開調整不同區域的字體和大小
        
        // A. 大標題 (ABOUT ME, CHARACTERS)
        sectionTitleStyle: {
            fontFamily: "'Orbitron', '微軟正黑體', sans-serif",
            fontSize: "1.8rem" 
        },

        // B. 關於我 (內文)
        aboutStyle: {
            fontFamily: "'Noto Serif TC', sans-serif",
            fontSize: "0.8rem"
        },

        // C. 角色介紹 (內文)
        characterStyle: {
            fontFamily: "'Noto Serif TC', sans-serif",
            fontSize: "0.9rem"
        },
// --- 【新功能】獨立控制盒子內的小標題 ---

        // D. 關於我盒子內的標題 (如: "關於我")
        aboutBoxTitleStyle: {
            fontFamily: "'Noto Serif TC', sans-serif", 
            fontSize: "1.5rem"  // 獨立調整這裡的大小
        },

        // E. 角色卡片內的標題 (如: "艾莉亞 (Aria)")
        charNameStyle: {
            fontFamily: "'Noto Serif TC', sans-serif",
            fontSize: "1.4rem"  // 獨立調整這裡的大小
        },

        // --- 【功能 2】後框線透明度 ---
        // 0.1 = 很淡, 1.0 = 很實, 0.3 = 30%
        offsetBorderOpacity: 0.3,

        title: "星際旅人"
    },

    intro: {
        title: "查理",
        image: "https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?q=80&w=1887&auto=format&fit=crop",
        content: "社恐人士"
    },

    characters: [
        {
            name: "諾拉 Nora",
            image: "https://github.com/ciao-is-charlie/charlie/blob/4ebe6b94be9148af2dbb20a191cd670593a09d54/pic/char-nora.png?raw=true",
            desc: "埃蕾奧諾拉．德．阿奎拉<br>黑手黨女王。<br>把你寵爛的大姊姊。"
        },
        {
            name: "雷恩 (Ryan)",
            image: "https://images.unsplash.com/photo-1528659528242-2b6348c41d1a?q=80&w=1887&auto=format&fit=crop",
            desc: "被放逐的機械師。右臂是生鏽的機械義肢，雖然看起來冷漠，卻總是默默修好同伴的裝備。"
        },
        {
            name: "觀察者 (The Other)",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
            desc: "身分不明的觀察者。總是出現在事件發生的角落，手中的筆記本記錄著不為人知的歷史。"
        },
        {
            name: "諾瓦 (Nova)",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1887&auto=format&fit=crop",
            desc: "心靈感應者。在實驗室長大，第一次看見真正的星空時流下了眼淚。"
        },
        {
            name: "測試角色 5",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop",
            desc: "自動排版測試。這張卡片應該是圖片在右邊，文字在左邊。"
        },
        {
            name: "測試角色 6",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
            desc: "行尾測試。維持反轉排列。"
        },
         {
            name: "奧里恩 (Orion)",
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1887&auto=format&fit=crop",
            desc: "賞金獵人。從不摘下面具，沒人知道他的過去。"
        }
    ]
};