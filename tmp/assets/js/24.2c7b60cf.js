(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{134:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"经典统计学习方法——决策树-id3-c4-5-cart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#经典统计学习方法——决策树-id3-c4-5-cart"}},[t._v("#")]),t._v(" 经典统计学习方法——决策树(ID3/C4.5/CART)")]),t._v(" "),r("p",[t._v("最近开始技术♂转型，开始搞机器学习，使用教材是李航老师的《统计学习方法》，基本涵盖了经典的机器学习方法，只不过缺少神经网络部分，准备看完这本书之后，继续学习 "),r("a",{attrs:{href:"http://cs231n.stanford.edu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CS231n"),r("OutboundLink")],1),t._v(" 。")]),t._v(" "),r("p",[t._v("前三章的内容都比较基础，第一章介绍了统计学习的基本要素以及基本步骤，第二、三章分别介绍了两种基础的模型：感知机和k近邻法，都比较简单，50行代码就能搞定。")]),t._v(" "),r("p",[t._v("从第四章开始，本书的难度开始逐渐拔高，书中出现了越来越多的数学证明，第四章的朴素贝叶斯分类器中，用到了很多概率论的知识，比如极大似然估计、 贝叶斯估计等。如果要深入机器学习原理的话，还是要回归到线性代数和概率论的学习中。")]),t._v(" "),r("p",[t._v("本文着重讲第五章的内容——决策树。")]),t._v(" "),r("h2",{attrs:{id:"决策树简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#决策树简述"}},[t._v("#")]),t._v(" 决策树简述")]),t._v(" "),r("p",[t._v("决策树是本书出现的第一种真正意义上的高可用方法，当然前一章的朴素贝叶斯分类器也算，但从复杂度熵来讲，决策树更胜一筹。")]),t._v(" "),r("p",[t._v("决策树是一种基本的分类与回归方法，决策树的学习包括：特征选择、决策树的生成和决策树的修剪。其中特征选择决定了决策树的结构，决策树的生成和修剪阶段主要决定决策树的复杂度（深度）。")]),t._v(" "),r("h2",{attrs:{id:"决策树的特征选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#决策树的特征选择"}},[t._v("#")]),t._v(" 决策树的特征选择")]),t._v(" "),r("p",[t._v("决策树特征选择方式的不同，衍生出了不同的算法，比如ID3、C4.5、CART等。以这三种为例，其实ID3与C4.5只是特征选择函数不同，前者依照信息增益，后者依照信息增益比，生成的树的结构很相似，同时也使用相同的剪枝算法。CART较为特殊，后文将其分开来讲。")]),t._v(" "),r("h2",{attrs:{id:"id3与c4-5算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#id3与c4-5算法"}},[t._v("#")]),t._v(" ID3与C4.5算法")]),t._v(" "),r("p",[t._v("决策树生成过程中，通过计算不同特征的划分带来的信息增益，可以决定是否继续生成决策树。")]),t._v(" "),r("p",[t._v("这两种算法生成的决策树，每一支子树都是一个特征值的可能值，使用时只需要按照标定的顺序，对输入变量各个特征值沿着树从根节点一直比对，延续到的叶节点就标定了该输入变量的最终分类。")])])}),[],!1,null,null,null);a.default=s.exports}}]);