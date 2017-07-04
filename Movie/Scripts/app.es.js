﻿webpackJsonp([1], Array(21).concat([function (t, e, n) {
    "use strict";
    n.d(e, "b", function () {
        return o
    }), n.d(e, "c", function () {
        return s
    }), n.d(e, "j", function () {
        return r
    }), n.d(e, "i", function () {
        return i
    }), n.d(e, "e", function () {
        return a
    }), n.d(e, "d", function () {
        return u
    }), n.d(e, "f", function () {
        return c
    }), n.d(e, "g", function () {
        return d
    }), n.d(e, "k", function () {
        return l
    }), n.d(e, "l", function () {
        return h
    }), n.d(e, "h", function () {
        return f
    }), n.d(e, "a", function () {
        return v
    }), n.d(e, "m", function () {
        return p
    }), n.d(e, "n", function () {
        return g
    });
    var o = "SET_USER",
        s = "SET_TEMP_LOGOS",
        r = "SET_AMOUNT",
        i = "SET_LOGOS",
        a = "SET_CURRENT_LOGO",
        u = "SET_PREVIOUS_LOGO",
        c = "SET_OPTIONS",
        d = "INCREASE_ANSWER_COUNT",
        l = "SET_ANSWER_COUNT",
        h = "START_GAME",
        f = "FINISH_GAME",
        v = "TOGGLE_SOUND",
        p = "SET_HIGH_SCORES",
        g = "SET_FIREBASE_FEEDBACK"
}, , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    var o = n(36),
        s = n(1),
        r = n(56),
        i = n(57),
        a = n(59),
        u = n(58);
    o.a.use(s.a), e.a = new s.a.Store({
        getters: r,
        modules: {
            app: i.a,
            user: a.a,
            sound: u.a
        },
        strict: !1
    })
}, , function (t, e, n) {
    n(125);
    var o = n(0)(n(60), n(151), null, null);
    t.exports = o.exports
}, function (t, e, n) {
    var o = n(0)(n(62), n(153), null, null);
    t.exports = o.exports
}, function (t, e, n) {
    n(120);
    var o = n(0)(n(66), n(146), "data-v-50fb2485", null);
    t.exports = o.exports
}, , , function (t, e, n) {
    "use strict";
    e.a = {
        getJSON: function (t, e) {
            var n = new window.XMLHttpRequest;
            n.open("get", t, !0), n.responseType = "json", n.onload = function () {
                200 === n.status ? e(null, n.response) : e(n.status)
            }, n.send()
        },
        shuffle: function (t) {
            var e = void 0,
                n = void 0,
                o = void 0;
            for (o = t.length; o; o--) e = Math.floor(Math.random() * o), n = t[o - 1], t[o - 1] = t[e], t[e] = n;
            return t
        },
        generateIDs: function (t) {
            return t.forEach(function (e, n) {
                t[n].id = n
            }), t
        },
        getAnswerOptions: function (t, e, n, o) {
            var s = [];
            for (s.push(n) ; s.length < 4;) {
                var r = Math.floor(Math.random() * e);
                s.includes(r) || o && o === r || s.push(r)
            }
            return s = this.shuffle(s), [t[s[0]], t[s[1]], t[s[2]], t[s[3]]]
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(48),
        s = (n.n(o), n(36)),
        r = n(52),
        i = n(53),
        a = (n.n(i), n(47)),
        u = n(49),
        c = n.n(u),
        d = n(50),
        l = n.n(d),
        h = n(51),
        f = n.n(h);
    s.a.use(r.a);
    var v = [{
        path: "/",
        component: c.a,
        children: [{
            path: "",
            component: l.a
        }, {
            path: "ranking",
            component: f.a
        }]
    }],
        p = new r.a({
            routes: v
        });
    n.i(i.sync)(a.a, p), new s.a({
        router: p,
        store: a.a
    }).$mount("#app"), document.querySelector(".loading-container").style.display = "none"
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "route", function () {
        return o
    }), n.d(e, "routePath", function () {
        return s
    });
    var o = function (t) {
        return t.route
    },
        s = function (t) {
            return t.route.path
        }
}, function (t, e, n) {
    "use strict";
    var o, s = n(22),
        r = n.n(s),
        i = n(71),
        a = n.n(i),
        u = n(54),
        c = n(21),
        d = {
            logos: [],
            tempLogos: [],
            answerCount: 0,
            amount: 0,
            currentLogo: {},
            previousLogo: {},
            options: [],
            gameFinished: !1,
            startTime: (new Date).getTime(),
            endTime: 0,
            highScores: [],
            firebaseFeedback: !1
        },
        l = {
            logos: function (t) {
                return t.logos
            },
            answerCount: function (t) {
                return t.answerCount
            },
            currentLogo: function (t) {
                return t.currentLogo
            },
            previousLogo: function (t) {
                return t.previousLogo
            },
            options: function (t) {
                return t.options
            },
            gameFinished: function (t) {
                return t.gameFinished
            },
            amount: function (t) {
                return t.amount
            },
            startTime: function (t) {
                return t.startTime
            },
            endTime: function (t) {
                return t.endTime
            },
            highScores: function (t) {
                return t.highScores
            },
            firebaseFeedback: function (t) {
                return t.firebaseFeedback
            }
        },
        h = {
            initializeLogos: function (t, e) {
                var n = t.commit;
                u.a.getJSON("static/logos.json", function (t, o) {
                    "string" == typeof o && (o = JSON.parse(o)), t ? o = JSON.parse(window.localStorage.getItem("logos")) : window.localStorage.setItem("logos", a()(o)), n(c.c, {
                        tempLogos: o
                    }), e()
                })
            },
            setCurrentLogo: function (t, e) {
                var n = t.commit,
                    o = t.state,
                    s = o.currentLogo;
                n(c.d, {
                    previousLogo: s
                }), n(c.e, {
                    currentLogo: e
                })
            },
            setOptions: function (t) {
                var e = t.commit,
                    n = t.state,
                    o = u.a.getAnswerOptions(n.logos, n.amount, n.currentLogo.id, n.previousLogo.id);
                e(c.f, {
                    options: o
                })
            },
            increaseAnswerCount: function (t) {
                (0, t.commit)(c.g)
            },
            finishGame: function (t) {
                (0, t.commit)(c.h)
            },
            restartGame: function (t) {
                var e = t.commit,
                    n = t.state,
                    o = u.a.generateIDs(u.a.shuffle(JSON.parse(a()(n.tempLogos)))),
                    s = o.length,
                    r = o[0],
                    i = {},
                    d = u.a.getAnswerOptions(o, s, r.id);
                e(c.i, {
                    logos: o
                }), e(c.j, {
                    amount: s
                }), e(c.k, {
                    count: 0
                }), e(c.e, {
                    currentLogo: r
                }), e(c.d, {
                    previousLogo: i
                }), e(c.f, {
                    options: d
                }), e(c.l)
            },
            setHighScores: function (t, e) {
                (0, t.commit)(c.m, {
                    scores: e
                })
            },
            setFirebaseFeedback: function (t) {
                (0, t.commit)(c.n, {
                    feedback: !0
                })
            }
        },
        f = (o = {}, r()(o, c.c, function (t, e) {
            var n = e.tempLogos;
            t.tempLogos = n
        }), r()(o, c.j, function (t, e) {
            var n = e.amount;
            t.amount = n
        }), r()(o, c.i, function (t, e) {
            var n = e.logos;
            t.logos = n
        }), r()(o, c.e, function (t, e) {
            var n = e.currentLogo;
            t.currentLogo = n
        }), r()(o, c.d, function (t, e) {
            var n = e.previousLogo;
            t.previousLogo = n
        }), r()(o, c.f, function (t, e) {
            var n = e.options;
            t.options = n
        }), r()(o, c.g, function (t) {
            t.answerCount++
        }), r()(o, c.k, function (t, e) {
            var n = e.count;
            t.answerCount = n
        }), r()(o, c.l, function (t) {
            t.gameFinished = !1, t.startTime = (new Date).getTime(), t.endTime = 0
        }), r()(o, c.h, function (t) {
            t.gameFinished = !0, t.endTime = (new Date).getTime()
        }), r()(o, c.m, function (t, e) {
            var n = e.scores;
            t.highScores = n
        }), r()(o, c.n, function (t, e) {
            var n = e.feedback;
            t.firebaseFeedback = n
        }), o);
    e.a = {
        state: d,
        getters: l,
        actions: h,
        mutations: f
    }
}, function (t, e, n) {
    "use strict";
    var o = n(22),
        s = n.n(o),
        r = n(131),
        i = (n.n(r), n(21)),
        a = new r.Howl({
            src: ["../../static/sounds/finish.mp3", "../../static/sounds/finish.ogg"],
            src:["",""],
            volume: .5
        }),
        u = new r.Howl({
            src: ["../../static/sounds/correct.mp3", "../../static/sounds/correct.ogg"],
            src: ["", ""],
            volume: .5
        }),
        c = new r.Howl({
            src: ["../../static/sounds/gameover.mp3", "../../static/sounds/gameover.ogg"],
            src: ["", ""],
            rate: 1.3,
            volume: .5
        }),
        d = {
            sound: !window.localStorage.getItem("sound") || JSON.parse(window.localStorage.getItem("sound"))
        },
        l = {
            sound: function (t) {
                return t.sound
            }
        },
        h = {
            playSound: function (t, e) {
                t.commit;
                if (t.state.sound) switch (e) {
                    case "game-end":
                        a.play();
                        break;
                    case "correct":
                        u.play();
                        break;
                    case "wrong":
                        c.play()
                }
            },
            toggleSound: function (t) {
                (0, t.commit)(i.a)
            }
        },
        f = s()({}, i.a, function (t) {
            t.sound = !t.sound, window.localStorage.setItem("sound", t.sound)
        });
    e.a = {
        state: d,
        getters: l,
        actions: h,
        mutations: f
    }
}, function (t, e, n) {
    "use strict";
    var o = n(22),
        s = n.n(o),
        r = n(21),
        i = {
            user: null
        },
        a = {
            user: function (t) {
                return t.user
            }
        },
        u = {
            setUser: function (t, e) {
                (0, t.commit)(r.b, {
                    user: e
                })
            }
        },
        c = s()({}, r.b, function (t, e) {
            var n = e.user;
            t.user = n
        });
    e.a = {
        state: i,
        getters: a,
        actions: u,
        mutations: c
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(74),
        s = n.n(o),
        r = n(5),
        i = n.n(r),
        a = n(128),
        u = (n.n(a), n(46)),
        c = (n.n(u), n(1)),
        d = n(138),
        l = n.n(d),
        h = n(135),
        f = n.n(h),
        v = n(141),
        p = n.n(v),
        g = n(137),
        m = n.n(g),
        w = {
            apiKey: "AIzaSyDzKhNG-bafYPDTbAFFGqSscGJ7a-rdB9M",
            authDomain: "javascript-game.firebaseapp.com",
            databaseURL: "https://javascript-game.firebaseio.com",
            storageBucket: "javascript-game.appspot.com",
            messagingSenderId: "853137885896"
        };
    e.default = {
        components: {
            ProgressBar: l.a,
            Credits: f.a,
            SoundToggle: p.a,
            LoginView: m.a
        },
        created: function () {
            this.firebase(), "/ranking" === this.routePath && this.getHighScores()
        },
        computed: i()({}, n.i(c.b)(["amount", "answerCount", "startTime", "endTime", "user", "routePath", "highScores"])),
        watch: {
            routePath: function (t) {
                "/ranking" === t && 0 === this.highScores.length && this.getHighScores()
            }
        },
        methods: i()({}, n.i(c.c)(["setUser", "setHighScores", "setFirebaseFeedback"]), {
            logIn: function () {
                a.auth().signInWithRedirect(new a.auth.GithubAuthProvider)
            },
            logOut: function () {
                var t = this;
                a.auth().signOut().then(function () {
                    t.setUser(null)
                })
            },
            firebase: function () {
                var t = this;
                a.initializeApp(w), a.auth().onAuthStateChanged(function (e) {
                    e ? a.database().ref("users/" + e.uid).set({
                        name: e.displayName,
                        email: e.email,
                        photo_url: e.photoURL
                    }).then(function () {
                        t.setUser(e), t.setFirebaseFeedback()
                    }) : t.setFirebaseFeedback()
                })
            },
            saveScore: function () {
                var t = this;
                if (this.user) {
                    var e = this.user.displayName || this.user.email.substring(0, this.user.email.indexOf("@")),
                        n = {
                            answerCount: this.answerCount,
                            amount: this.amount,
                            startTime: this.startTime,
                            endTime: this.endTime,
                            name: e
                        };
                    a.database().ref("/scores/" + this.user.uid).once("value").then(function (e) {
                        var o = e.val();
                        (!o || o && t.shouldSaveNewScore(n, o)) && a.database().ref("scores/" + t.user.uid).set(n)
                    })
                }
            },
            shouldSaveNewScore: function (t, e) {
                var n = t.answerCount > e.answerCount,
                    o = t.answerCount === e.answerCount,
                    s = t.endTime - t.startTime < e.endTime - e.startTime;
                return t.endTime - t.startTime > 1e3 * this.answerCount && (n || o && s)
            },
            getHighScores: function () {
                var t = this;
                a.database().ref("/scores").orderByChild("answerCount").limitToLast(10).once("value").then(function (e) {
                    if (e.val()) {
                        var n = s()(e.val()).map(function (t) {
                            return e.val()[t]
                        }).sort(function (t, e) {
                            return t.answerCount > e.answerCount ? -1 : e.answerCount > t.answerCount ? 1 : 0
                        });
                        t.setHighScores(n)
                    }
                })
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {}
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1),
        i = n(136),
        a = n.n(i),
        u = n(142),
        c = n.n(u),
        d = n(139),
        l = n.n(d);
    e.default = {
        components: {
            JsLogo: a.a,
            UiOptions: c.a,
            ResultPage: l.a
        },
        computed: s()({}, n.i(r.b)(["gameFinished", "answerCount", "logos", "currentLogo", "amount"])),
        created: function () {
            var t = this;
            this.initializeLogos(function () {
                t.restartGame()
            })
        },
        methods: s()({}, n.i(r.c)(["initializeLogos", "setCurrentLogo", "setOptions", "increaseAnswerCount", "playSound", "finishGame", "restartGame"]), {
            answer: function (t) {
                t === this.currentLogo.id ? (this.increaseAnswerCount(), this.answerCount === this.amount ? (this.playSound("game-end"), this.finishGame(), this.$emit("save-score")) : (this.playSound("correct"), this.setCurrentLogo(this.logos[this.answerCount]), this.setOptions())) : (this.playSound("wrong"), this.finishGame(), this.$emit("save-score"))
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1);
    e.default = {
        data: function () {
            return {
                show: !1,
                prod: !0
            }
        },
        computed: s()({}, n.i(r.b)({
            currentLogo: "currentLogo"
        }), {
            logoUrl: function () {
                if (this.currentLogo.name) return this.prod ? "../static/logos/" + window.btoa(this.currentLogo.name) + ".png" : "../static/logos/" + this.currentLogo.name.toLowerCase() + ".png"
            }
        }),
        mounted: function () {
            this.logoUrl && (this.show = !0)
        },
        watch: {
            logoUrl: function (t) {
                var e = this;
                this.show = !1, setTimeout(function () {
                    e.show = !0
                }, 1)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(77),
        s = n.n(o),
        r = n(1);
    e.default = {
        data: function () {
            return {
                dropdownOpen: !1
            }
        },
        watch: {
            dropdownOpen: function (t) {
                t || document.removeEventListener("click", this.dropdownAction)
            }
        },
        computed: n.i(r.b)(["user", "routePath", "firebaseFeedback"]),
        methods: {
            openDropdown: function (t) {
                var e = this;
                t.preventDefault(), this.dropdownOpen || (document.addEventListener("click", this.dropdownAction), window.setTimeout(function () {
                    e.dropdownOpen = !0
                }))
            },
            dropdownAction: function (t) {
                ("object" === s()(t.target.className) || t.target.className.indexOf("dropdown") < 0) && (this.dropdownOpen = !1)
            },
            logIn: function () {
                this.$emit("log-in")
            },
            logOut: function () {
                this.$emit("log-out")
            },
            closeDropdown: function () {
                this.dropdownOpen = !1
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1);
    e.default = {
        computed: s()({}, n.i(r.b)({
            answerCount: "answerCount",
            amount: "amount"
        }), {
            progress: function () {
                return this.answerCount / this.amount * 100 || 0
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1);
    e.default = {
        computed: s()({}, n.i(r.b)(["highScores"]))
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1);
    e.default = {
        data: function () {
            return {
                insults: ["Why don't you go back to your desk and tail call yourself?", "I never believed in chaos theory until I saw your variable naming convention!", "Your commit is writing checks your merge can't cash.", "Your code, just like C. Has no class!", "Your coding methods are so backwards they've added it to the school curriculum in Texas!", "Your code runs so slow your data brings sleeping bags to camp-out in the cache lines.", "More unit tests? No! What your code needs is petrol and a match.", "Imagine an egg hitting a concrete pavement, that's how hard-wired, inflexible and brittle your code is.", "Don't worry about it, I'll get someone technical to do this.", "You're slower than a Java app.", "You are one tab level off.", "Your code looks as though you have been playing bingo with anti-patterns.", "Your code is so wretched, that hard disks add it to their bad block lists.", "Clean, clear, and under control; three things that will never be said about your code.", "By popular demand, your code backup is in /dev/null/.", "Your webpages only render in IE 5.5.", '*Knock, knock* "Who\'s there?" *long pause* Your init method.', "There may be no I in TEAM, but I can't spell B GS, without U.", "If Perl scripts could carry coffee around, I could replace you with a one-liner."]
            }
        },
        computed: s()({}, n.i(r.b)({
            amount: "amount",
            answerCount: "answerCount"
        }), {
            feedback: function () {
                var t = this.answerCount / this.amount * 100 || 0;
                return t < 1 ? "Do you even JavaScript, bro?" : t >= 100 ? "You did it! Now you can go back to your desk and start working." : this.insults[Math.floor(Math.random() * this.insults.length)]
            },
            twitterText: function () {
                return "You know there are too many JS libraries when there is a game for it 🎯 \n I got " + this.answerCount + "/" + this.amount + ". Try it out! https://javascript-game.firebaseapp.com"
            }
        }),
        methods: n.i(r.c)(["restartGame"])
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["text", "id"],
        created: function () {
            var t = this;
            setTimeout(function () {
                t.$el.addEventListener("mouseup", t.debounce(t.cleanUp, 2e3))
            })
        },
        methods: {
            onDown: function (t) {
                this.showRipple(t), document.activeElement.blur(), t.preventDefault()
            },
            showRipple: function (t) {
                var e = void 0,
                    n = void 0,
                    o = void 0,
                    s = void 0,
                    r = void 0,
                    i = void 0,
                    a = void 0;
                return "BUTTON" === t.target.tagName ? n = t.target : (n = t.target.parentNode, "DIV" === n.tagName && (n = t.target.parentNode.parentNode)), o = document.createElement("span"), s = n.offsetWidth, e = n.getBoundingClientRect(), i = t.pageX - e.left - s / 2, a = t.pageY - e.top - s / 2, r = "top:" + a + "px; left: " + i + "px; height: " + s + "px; width: " + s + "px;", n.querySelector(".ripple--container").appendChild(o), o.setAttribute("style", r)
            },
            cleanUp: function (t) {
                var e = void 0;
                for ("SPAN" === t.target.tagName ? e = t.target.parentNode : "BUTTON" === t.target.tagName && (e = t.target.firstChild) ; e.firstChild;) e.removeChild(e.firstChild)
            },
            debounce: function (t, e) {
                var n = void 0;
                return n = void 0,
                    function () {
                        var o = void 0,
                            s = void 0;
                        return s = this, o = arguments, clearTimeout(n), n = setTimeout(function () {
                            return t.apply(s, o)
                        }, e)
                    }
            },
            onClick: function () {
                this.$emit("button-click", this.id)
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(1);
    e.default = {
        computed: n.i(o.b)({
            sound: "sound"
        }),
        methods: n.i(o.c)(["toggleSound"])
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(5),
        s = n.n(o),
        r = n(1),
        i = n(140),
        a = n.n(i);
    e.default = {
        components: {
            RippleButton: a.a
        },
        data: function () {
            return {
                show: !0
            }
        },
        computed: s()({}, n.i(r.b)({
            options: "options"
        })),
        methods: {
            answer: function (t) {
                this.$emit("answer", t)
            }
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, , , , , , , , , function (t, e, n) {
    n(123);
    var o = n(0)(n(61), n(149), "data-v-64698a2e", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(121);
    var o = n(0)(n(63), n(147), "data-v-5dc09f95", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(124);
    var o = n(0)(n(64), n(150), "data-v-6f376786", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(119);
    var o = n(0)(n(65), n(145), "data-v-321fe375", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(117);
    var o = n(0)(n(67), n(143), "data-v-088b1666", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(122);
    var o = n(0)(n(68), n(148), null, null);
    t.exports = o.exports
}, function (t, e, n) {
    n(126);
    var o = n(0)(n(69), n(152), "data-v-dd4e00dc", null);
    t.exports = o.exports
}, function (t, e, n) {
    n(118);
    var o = n(0)(n(70), n(144), "data-v-31408df9", null);
    t.exports = o.exports
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("h1", [t._v(t._s(t.feedback))]), t._v(" "), n("h2", [t._v(t._s(t.answerCount) + " / " + t._s(t.amount))]), t._v(" "), n("button", {
                staticClass: "ripple-button button",
                on: {
                    click: t.restartGame
                }
            }, [t._v("\n    Restart\n  ")]), t._v(" "), n("div", {
                staticClass: "custom-tweet-button"
            }, [n("a", {
                attrs: {
                    href: "https://twitter.com/intent/tweet?text=" + t.twitterText,
                    target: "_blank",
                    alt: "Tweet your score"
                }
            }, [n("i", {
                staticClass: "btn-icon"
            }), t._v(" "), n("span", {
                staticClass: "btn-text"
            }, [t._v("Tweet your score")])])]), t._v(" "), t._m(0), t._v(" "), n("router-link", {
                staticClass: "ranking-link",
                attrs: {
                    to: "ranking"
                }
            }, [n("h3", [n("svg", {
                attrs: {
                    fill: "#66BB6A",
                    height: "24",
                    viewBox: "0 0 24 12",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"
                }
            })]), t._v("\n      See High Scores\n    ")])])], 1)
        },
        staticRenderFns: [function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "custom-github-button"
            }, [n("a", {
                attrs: {
                    href: "https://github.com/samiheikki/javascript-guessing-game",
                    target: "_blank",
                    alt: "Star samiheikki/javascript-guessing-game on GitHub"
                }
            }, [n("i", {
                staticClass: "btn-icon"
            }), t._v(" "), n("span", {
                staticClass: "btn-text"
            }, [t._v("Star on GitHub")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [t.show ? n("div", {
                staticClass: "flex-container"
            }, t._l(t.options, function (e) {
                return n("ripple-button", {
                    staticClass: "button",
                    attrs: {
                        text: e.name,
                        id: e.id
                    },
                    on: {
                        "button-click": t.answer
                    }
                })
            })) : t._e()])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "progress",
                style: {
                    width: t.progress + "%"
                }
            })])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "flex"
            }, [n("router-link", {
                attrs: {
                    to: "/"
                }
            }, [n("h4", [n("svg", {
                attrs: {
                    fill: "#FFFFFF",
                    height: "24",
                    viewBox: "0 0 24 16",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                }
            })]), t._v("\n        Play the game\n      ")])])], 1), t._v(" "), n("h1", [t._v("High Scores (top 10)")]), t._v(" "), n("div", {
                staticClass: "scores-container"
            }, [t._l(t.highScores, function (e, o) {
                return n("div", {
                    staticClass: "score-row"
                }, [n("h2", {
                    staticClass: "score-number"
                }, [t._v("#" + t._s(o + 1))]), t._v(" "), n("div", {
                    staticClass: "score-row-details"
                }, [n("h3", [t._v(t._s(e.name || "Anonymous"))]), t._v(" "), n("span", {
                    staticClass: "extra-detail"
                }, [t._v(t._s(e.answerCount) + " / " + t._s(e.amount))])])])
            }), t._v(" "), 0 === t.highScores.length ? n("div", [n("h3", [t._v("Loading...")])]) : t._e()], 2)])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.show ? n("img", {
                staticClass: "logo",
                attrs: {
                    src: t.logoUrl,
                    alt: "Guess this logo"
                }
            }) : t._e()])], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("button", {
                staticClass: "ripple-button",
                attrs: {
                    ripple: ""
                },
                on: {
                    mousedown: t.onDown,
                    click: t.onClick
                }
            }, [n("div", {
                staticClass: "ripple--container"
            }), t._v("\n  " + t._s(t.text) + "\n")])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [t._v("\n  By "), n("a", {
                attrs: {
                    href: "https://suoheikki.com/",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("\n    Sami Suo-Heikki\n    "), n("svg", {
                attrs: {
                    fill: "#66BB6A",
                    height: "12",
                    viewBox: "0 0 24 24",
                    width: "12",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                }
            })])]), t._v("\n  and\n  "), n("a", {
                attrs: {
                    href: "https://github.com/samiheikki/javascript-guessing-game/graphs/contributors",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [t._v("\n    Contributors\n    "), n("svg", {
                attrs: {
                    fill: "#66BB6A",
                    height: "12",
                    viewBox: "0 0 24 24",
                    width: "12",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                }
            })])])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.firebaseFeedback ? n("div", {
                staticClass: "login-root"
            }, [t.user ? t._e() : n("button", {
                attrs: {
                    type: "button",
                    name: "button"
                },
                on: {
                    click: t.logIn
                }
            }, [t._v("Sign in with GitHub")]), t._v(" "), t.user ? n("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: t.openDropdown
                }
            }, [n("img", {
                attrs: {
                    src: t.user.photoURL,
                    alt: t.user.displayName
                }
            }), t._v(" "), n("svg", {
                attrs: {
                    fill: "#66BB6A",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    d: "M7 10l5 5 5-5z"
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }
            })])]) : t._e(), t._v(" "), t.dropdownOpen && t.user ? n("div", {
                staticClass: "menu-content"
            }, [n("div", {
                staticClass: "dropdown-menu"
            }, [n("div", {
                staticClass: "dropdown-header"
            }, [t._v("\n        Signed in as "), n("strong", {
                staticClass: "dropdown-name"
            }, [t._v(t._s(t.user.displayName || t.user.email || "Anonymous"))])]), t._v(" "), n("div", {
                staticClass: "dropdown-divider"
            }), t._v(" "), "/" === t.routePath ? n("router-link", {
                staticClass: "dropdown-item",
                attrs: {
                    to: "/ranking"
                },
                nativeOn: {
                    click: function (e) {
                        t.closeDropdown(e)
                    }
                }
            }, [t._v("High scores")]) : n("router-link", {
                staticClass: "dropdown-item",
                attrs: {
                    to: "/"
                },
                nativeOn: {
                    click: function (e) {
                        t.closeDropdown(e)
                    }
                }
            }, [t._v("Play the game")]), t._v(" "), n("a", {
                staticClass: "dropdown-item",
                attrs: {
                    href: "#"
                },
                on: {
                    click: t.logOut
                }
            }, [t._v("Sign out")]), t._v(" "), n("div", {
                staticClass: "dropdown-divider"
            }), t._v(" "), n("a", {
                staticClass: "dropdown-item",
                attrs: {
                    href: "https://github.com/samiheikki/javascript-guessing-game"
                }
            }, [t._v("Source code")])], 1)]) : t._e()]) : t._e()
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("progress-bar"), t._v(" "), n("sound-toggle"), t._v(" "), n("login-view", {
                on: {
                    "log-in": t.logIn,
                    "log-out": t.logOut
                }
            }), t._v(" "), n("router-view", {
                on: {
                    "save-score": t.saveScore
                }
            }), t._v(" "), "/" === t.routePath ? n("credits", {
                staticClass: "credits"
            }) : t._e()], 1)
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [t.sound ? n("svg", {
                on: {
                    click: t.toggleSound
                }
            }, [n("path", {
                attrs: {
                    d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                }
            })]) : n("svg", {
                on: {
                    click: t.toggleSound
                }
            }, [n("path", {
                attrs: {
                    d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                }
            })])])
        },
        staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", [t.gameFinished ? t._e() : n("js-logo"), t._v(" "), t.gameFinished ? t._e() : n("ui-options", {
                on: {
                    answer: t.answer
                }
            }), t._v(" "), t.gameFinished ? n("result-page") : t._e()], 1)
        },
        staticRenderFns: []
    }
}, , function (t, e) { }]), [55]);
//# sourceMappingURL=app.ea4243efc4bb97160d89.js.map