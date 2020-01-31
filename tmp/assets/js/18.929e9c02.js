(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{139:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lintcode-困难题赏-103-寻找带环链表入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lintcode-困难题赏-103-寻找带环链表入口"}},[t._v("#")]),t._v(" LintCode 困难题赏 - 103.寻找带环链表入口")]),t._v(" "),a("h3",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给定一个链表，如果链表中存在环，则返回到链表中环的起始节点，如果没有环，返回null。")]),t._v(" "),a("p",[a("strong",[t._v("要求")]),t._v("：不使用额外空间。"),a("br"),t._v(" "),a("strong",[t._v("例子")]),t._v("：带环链表"),a("code",[t._v("1->5->3->4->6->(index-2)")]),t._v("，返回值为"),a("code",[t._v("index-2")]),t._v("对应的节点，即值为"),a("code",[t._v("5")]),t._v("的那个节点。")]),t._v(" "),a("h3",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[t._v("#")]),t._v(" 题解")]),t._v(" "),a("p",[t._v("这道题可以说是链表题目中的经典题目了。解这道题之前，还有道题（LintCode No.102）是判断一个链表是否有环，使用了快慢指针的方法，具体思路是使用两根指针以不同的速度遍历链表，快指针一次走两个节点，慢指针一次走一个节点，如果两根指针中途相遇了，那么这个链表就是有环的。")]),t._v(" "),a("p",[t._v("本题的思路依然是使用快慢指针的方法，但前提要先利用快慢指针的特性，找出快慢指针走过的路程、环入口、相遇点之间的数学关系。")]),t._v(" "),a("p",[t._v("设起点到入口走了"),a("code",[t._v("x")]),t._v("步，入口到两根指针第一次相遇处走了"),a("code",[t._v("y")]),t._v("步，环的长度为"),a("code",[t._v("c")]),t._v("，则快慢指针第一次相遇时，快指针走的距离是慢指针的两倍，即"),a("code",[t._v("x+Nc+y=2(x+y)")]),t._v("（其中N为自然数），变换一下得到"),a("code",[t._v("x+y=Nc")]),t._v("，于是我们就可以得到入口的索引"),a("code",[t._v("x=Nc-y")]),t._v("，这个式子意味着，如果我们用另外两根指针去遍历该链表，其中一根从起点开始走，另外一根从之前快慢指针相遇的地方开始走，并且两根指针每次都只走一步，那么当第一根指针走了"),a("code",[t._v("x")]),t._v("步到达环入口时，恰好等于另一根指针从相遇点出发然后绕环N圈后到达环入口，即两根指针在环的入口处相遇。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/16968934/43889515-f8fdcf44-9bf6-11e8-83a0-53b50e8bb635.jpg",alt:"default"}})]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nDefinition of ListNode\nclass ListNode(object):\n\n    def __init__(self, val, next=None):\n        self.val = val\n        self.next = next\n"""')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    @param: head: The first node of linked list.\n    @return: The node where the cycle begins. if there is no cycle, return null\n    """')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectCycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        meet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" fast "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                meet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" fast "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" meet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n            meet "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" meet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);