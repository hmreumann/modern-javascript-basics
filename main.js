'use strict';

import {users, currentUser} from './users.js'
import toUpper from './helper.js'

let output = document.getElementById('output')


let userEmails = users.map(u => u.email)
output.innerHTML += toUpper(userEmails).join(', ')
