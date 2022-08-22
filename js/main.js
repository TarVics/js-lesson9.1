/**
 * Коллбек для задання параметрів елемента за допомогою функції {@link makeTag}
 * @callback fnParamsCallback
 * @param {HTMLElement} element Елемент, якому потрібно вказати параметри
 */

/**
 * Створення вкладених тегів
 * @param {string|object} tag Назва тегу. Наприклад 'div', 'h1' тощо. У випадку, якщо параметр має тип object, то
 * поля об'єкта мають наступне значення:
 *   tagName - назва тегу
 *   id - ID тегу
 *   className - назва класу, із пробілами в ролі роздільників, у випадку, якщо кілька класів
 *   innerHTML - innerHTML значення тегу
 *   innerText - innerText значення тегу. Якщо, цей атрибут заданий, то значення атрибуту html - буде ігноруватись
 *
 * @param {fnParamsCallback|HTMLElement} fnParams Колбек функція для задання параметрів елемента
 * У випадку, якщо функція не задана, то даний параметр буде вважатись дочірнім елементом, який додається
 * до поточного елемента
 * @param {...HTMLElement} children Дочірні елементи, які будуть додані до поточного елемента
 * @returns {HTMLElement}
 */
const makeTag = function(tag, fnParams= undefined, ...children) {
    let res;

    if (typeof tag === 'object') {
        res = document.createElement(tag.tagName || 'div');
        if(tag.id) res.id = tag.id;
        if(tag.className) res.className = tag.className;
        if(tag.innerText) {
            res.innerText = tag.innerText;
        } else if (tag.innerHTML) {
            res.innerHTML = tag.innerHTML;
        }
    } else {
        res = document.createElement(tag);
    }

    if (typeof fnParams === 'function') {
        fnParams(res);
        if (children.length) res.append(...children);
    } else if (fnParams){
        res.append(fnParams, ...children);
    } else {
        res.append(...children);
    }

    return res;
}

/**
 * Друкуємо виділений текст завдання
 * @param text
 */
const writeHeader = function(text) {
    document.body.appendChild(makeTag('p', e => {
        e.classList.add('task-header');
        e.innerText = text;
    }));
}

writeHeader(`- є масив let usersList = [...]
    Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості
    внутрішніх об'єктів створити свої окремі блок.
`);

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

const layout = makeTag('div', e => e.classList.add('layout'));

for (const user of usersList) {
    layout.appendChild(
        makeTag({ className: 'layout-card'},
            makeTag({ className: 'layout-header', innerHTML: user.name }),
            makeTag({ className: 'layout-body' },
                makeTag({ className: 'layout-row' },
                    makeTag({ className: 'layout-caption', innerHTML: 'id' }),
                    makeTag({ className: 'layout-value', innerHTML: user.id })
                ),
                makeTag({ className: 'layout-row' },
                    makeTag({className: 'layout-caption', innerHTML: 'name' }),
                    makeTag({className: 'layout-value', innerHTML: user.name })
                ),
                makeTag({ className: 'layout-row' },
                    makeTag({ className: 'layout-caption', innerHTML: 'username' }),
                    makeTag({ className: 'layout-value', innerHTML: user.username })
                ),
                makeTag({ className: 'layout-row' },
                    makeTag({ className: 'layout-caption', innerHTML: 'email' }),
                    makeTag({ className: 'layout-value', innerHTML: user.email })
                ),
                makeTag({ className: 'layout-card' },
                    makeTag({ className: 'layout-header', innerHTML: 'address' }),
                    makeTag({ className: 'layout-body' },
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'street' }),
                            makeTag({ className: 'layout-value', innerHTML: user.address?.street })
                        ),
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'suite' }),
                            makeTag({ className: 'layout-value', innerHTML: user.address?.suite })
                        ),
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'city' }),
                            makeTag({ className: 'layout-value', innerHTML: user.address?.city })
                        ),
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'zipcode' }),
                            makeTag({ className: 'layout-value', innerHTML: user.address?.zipcode })
                        ),
                        makeTag({ className: 'layout-card' },
                            makeTag({ className: 'layout-header', innerHTML: 'geo' }),
                            makeTag({ className: 'layout-body' },
                                makeTag({ className: 'layout-row' },
                                    makeTag({ className: 'layout-caption', innerHTML: 'lat' }),
                                    makeTag({ className: 'layout-value', innerHTML: user.address?.geo?.lat })
                                ),
                                makeTag({ className: 'layout-row' },
                                    makeTag({ className: 'layout-caption', innerHTML: 'lng' }),
                                    makeTag({ className: 'layout-value', innerHTML: user.address?.geo?.lng })
                                )
                            )
                        )
                    )
                ),
                makeTag({ className: 'layout-row' },
                    makeTag({ className: 'layout-caption', innerHTML: 'phone' }),
                    makeTag({ className: 'layout-value', innerHTML: user.phone })
                ),
                makeTag({ className: 'layout-row' },
                    makeTag({ className: 'layout-caption', innerHTML: 'website' }),
                    makeTag({ className: 'layout-value', innerHTML: user.website })
                ),
                makeTag({ className: 'layout-card' },
                    makeTag({ className: 'layout-header', innerHTML: 'company' }),
                    makeTag({ className: 'layout-body' },
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'name' }),
                            makeTag({ className: 'layout-value', innerHTML: user.company?.name })
                        ),
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'catch phrase' }),
                            makeTag({ className: 'layout-value', innerHTML: user.company?.catchPhrase })
                        ),
                        makeTag({ className: 'layout-row' },
                            makeTag({ className: 'layout-caption', innerHTML: 'bs' }),
                            makeTag({ className: 'layout-value', innerHTML: user.company?.bs })
                        )
                    )
                )
            )
        )
    )
}
document.body.appendChild(layout);

/********************************************************************/

writeHeader(`за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив)
  характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs
`);

document.body.appendChild(makeTag('pre', n => {
    n.style.color = 'red';
    n.innerText = ` Дану процедуру потрібно запускати на якісь іншій сторінці.
 На цій сторінці присутні лише параграфи з описом завдань - P.
 Крім цього, процедура виконує пошук тегів H1-H6
 
 *** Додав цю процедуру до rules.html
`}));

function tagCollect (node = document.body) {
        const headings = [];
        const paragraphs = [];

        const collect = function(n) {
            if (n.tagName === 'P') {
                paragraphs.push(n);
            } else {
                const [char0, char1] = n.tagName;
                if (char0 === 'H' && char1 >= '1' && char1 <= '6') headings.push(n)
            }
            [].forEach.call(n.children, el => collect(el));
        }
        collect(node);

        return { headings, paragraphs }
    }

// Дану процедуру потрібно запускати на якісь іншій сторінці.
// На цій сторінці присутні лише параграфи з описом завдань - P.
// Крім цього, також виконується пошук тегів H1-H6
const tags = tagCollect();
console.log(tags);

/********************************************************************/

writeHeader(`зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
asd ->tab-> <asd></asd>
`);

// Потрібно стати курсором на пробіл за словом, тоді тиснути на ТАБ. Слово не повинно містити символів із кодом
// меншим ніж англійська "A"
const editText = makeTag('div', n => {
    n.style.width = '400px';
    n.style.height = '250px'

    n.style.padding = '0';
    n.style.margin = '10px';
    n.style.maxWidth = '800px';
    n.style.minHeight = '200px';

    n.contentEditable = 'true';
    n.style.border = '1px solid black';
    n.innerText = 'зробити div contenteditable ввести будь яке ціле слово';

    function getCaret(element) {
        let start = 0;
        let position = 0;
        const isSupported = typeof window.getSelection !== "undefined";
        if (isSupported) {
            const selection = window.getSelection();
            // Check if there is a selection (i.e. cursor in place)
            if (selection.rangeCount !== 0) {
                // Store the original range
                const range = window.getSelection().getRangeAt(0);
                // Clone the range
                const preCaretRange = range.cloneRange();
                // Select all textual contents from the contenteditable element
                preCaretRange.selectNodeContents(element);
                // And set the range start to the original clicked position
                preCaretRange.setEnd(range.startContainer, range.startOffset);
                // Return the text length from contenteditable start to the range end
                start = preCaretRange.toString().length;
                // And set the range end to the original clicked position
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                // Return the text length from contenteditable start to the range end
                position = preCaretRange.toString().length;
            }
        }
        return { position, start };
    }

    function setCaret(element, pos) {
        // Creates range object
        const setPos = document.createRange();
        // Creates object for selection
        const set = window.getSelection();
        // Set start position of range
        setPos.setStart(element.childNodes[0], pos);
        // Collapse range within its boundary points
        // Returns boolean
        setPos.collapse(true);
        // Remove all ranges set
        set.removeAllRanges();
        // Add range with respect to range object.
        set.addRange(setPos);
        // Set cursor on focus
        element.focus();
    }

    n.onkeydown = function (e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const element = e.currentTarget;
            const curPos = getCaret(element).position;
            const strData = element.textContent;
            if (curPos > 0 && (strData[curPos] === ' ' || curPos === strData.length)) {
                let prevPos = strData.lastIndexOf(' ', curPos - 1);
                if (prevPos === -1) prevPos = 0; else prevPos++;
                if (prevPos < curPos) {
                    let tag = strData.substring(prevPos, curPos);
                    // Якщо в майбутньому тезі присутній символ із кодом меншим, ніж латинська A, то тег не створюється
                    if(tag.split('').find(val => val < 'A') === undefined) {
                        tag = '<' + tag + '></' + tag + '>';
                        e.currentTarget.textContent = strData.substring(0, prevPos) + tag + strData.substring(curPos);
                        setCaret(e.currentTarget, curPos + 2 /* <> */);
                    }
                }
            }
        }
    }
});

document.body.appendChild(editText);

