const quotes = [
    {
        quote: "결단을 내리지 않는 것이야말로 최대의 해악이다.",
        author: "Rene Descartes",
    },
    {
        quote: "과학은 정리된 지식이다. 지혜는 정리된 인생이다. <br /> Science is organized knowledge. Wisdom is organized life.",
        author: "immanuel Kant",
    },
    {
        quote: "세상을 정복하려고 하기 전에 당신 자신부터 정복하라. <br /> Conquer yourself rather than the world.",
        author: "Rene Descartes",
    },
    {
        quote: "친구란 내 슬픔을 등에 지고 가는 사람이다.",
        author: "An Indian said",
    },
    {
        quote: "만번 말하면 현실로 이루어진다.",
        author: "An Indian said",
    },
    {
        quote: "처음부터 끝까지 자신의 삶을 살아야 한다. 누구도 그대를 대신 할 수 없다.",
        author: "An Indian said",
    },
    {
        quote: "빨리 가려거든 혼자가라. 멀리 가려거든 함께가라.",
        author: "An Indian said",
    },
    {
        quote: "너무 빨리 달리지 마라. 너의 영혼이 뒤쳐질 수 있으니.",
        author: "An Indian said",
    },
    {
        quote: "그 사람의 신발을 신고 오래 걸어보기 전까지 그 사람을 판단하지 마라.",
        author: "An Indian said",
    },
    {
        quote: "가장 부드러운 것이 가장 강하다.",
        author: "An Indian said",
    },
    {
        quote: "잘 살기 위해서는 보이지 않는 곳에 살아야한다. <br /> to live well you must live unseen.",
        author: "Rene Descartes",
    },
    {
        quote: "자신의 벗을 최선의 적으로 삼아야 한다. 그대의 벗과 적대할 때 그대의 마음은 벗을 더없이 가깝게 여겨야 한다.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "옛사람들이 '신을 위해서' 행했던 것을 요즘 사람들은 돈을 위해서 행한다. <br /> What we once did 'for the sake of God' we now do for the sake of money.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다. <br /> You need chaos in your soul to give birth to a dancing star.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "사람은 높이 올라갈수록, 날 수 없는 사람들에게는 작아 보이는 법이다. <br /> The higher a man gets, the smaller he seems to those who cannot fly.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "무소유란 아무것도 갖지 않는다는 것이 아니라, 불필요한 것을 갖지 않는다는 뜻이다.",
        author: "법정",
    },
    {
        quote: "아는 것을 안다 하고, 모르는 것을 모른다 하는 것이 정말로 아는 것이다.",
        author: "공자",
    },
    {
        quote: "군자는 말은 어눌해도 행동에는 민첩하다. <br /> 君子 欲訥於言而敏於行.",
        author: "공자, 논어 24장",
    },
    {
        quote: "A가 인생의 성공이라면 A=x+y+z이다. x는 일, y는 놀이, z는 입을 다물고 있는 것이다.",
        author: "Albert Einstein",
    },
    {
        quote: "모두가 비슷한 생각을 한다는 것은, 아무도 생각하고 있지 않다는 말이다. <br /> When all think alike, no one thinks very much.",
        author: "Albert Einstein",
    },
    {
        quote: "성공한 사람보다는 가치 있는 사람이 되라. <br /> Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "오직 남을 위해 산 인생만이 가치 있는 것이다. <br /> Only a life lived for others is a life worth while.",
        author: "Albert Einstein",
    },
    {
        quote: "나약한 태도는 성격도 나약하게 만든다. <br /> Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein",
    },
    {
        quote: "정말 위대하고 감동적인 모든 것은 자유롭게 일하는 이들이 창조한다.",
        author: "Albert Einstein",
    },
    {
        quote: "새로 발견한 전기가 대체 무슨 쓸모가 있느냐는 말에 '갓 태어난 아기가 무슨 쓸모가 있겠습니까?'",
        author: "Michael Faraday",
    },
    {
        quote: "수학에서는 사물을 이해하는 것이 아니다. 그저 익숙해질 뿐이다. <br /> In mathematics you don't understand things. You just get used to them.",
        author: "Johann von Neumann",
    },
    {
        quote: "대부분의 사람들이 기회를 놓친다. 기회가 일처럼 보일때가 많기 때문이다. <br /> Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Alva Edison (토마스 에디슨)",
    },
    {
        quote: "디자인은 어떻게 보이고 느껴지냐의 문제만은 아닙니다. 디자인은 어떻게 기능하냐의 문제입니다. <br /> Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
    },
    {
        quote: "남의 말을 따라 하려면 교육이 필요하다. 그 말에 도전하려면 두뇌가 필요하다. <br /> To repeat what others have said, requires education; to challenge it, requires brains.",
        author: "Mary Pettibone Poole 메리 페티본 풀",
    },
    {
        quote: "길라임씨는 언제부터 그렇게 예뻤나? 작년부터?",
        author: "김주원, 시크릿가든",
    },
    {
        quote: "좋은 디자인은 할 수 있는 한 최소한으로 디자인한다. <br /> Good design is as little design as possible.",
        author: "Dieter Rams 디터 람스",
    },
    {
        quote: "Good design is unobtrusive. 좋은 디자인은 불필요한 관심을 끌지 않는다.",
        author: "Dieter Rams 디터 람스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length) ];


// innnerHTML은 innerText와는 달리 innerHTML은 element 안의 HTML이나 XML을 가져옵니다.
// 출처: https://hianna.tistory.com/480 [어제 오늘 내일:티스토리]
quote.innerHTML = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;