import { Mouse } from "../core/mouse";
import { MyDisplay } from "../core/myDisplay";

// -----------------------------------------
//
// -----------------------------------------
export class Con extends MyDisplay {

  constructor(opt:any = {}) {
    super(opt)
  }


  // 更新
  _update():void {
    super._update()

    const cols = [
      '\u001b[31m',
      '\u001b[32m',
      '\u001b[33m',
      '\u001b[34m',
      '\u001b[35m',
      '\u001b[36m'
    ]

    const normal = '\u001b[30m'
    const white = '\u001b[37m'
    const reset = '\u001b[0m'

    let t = white + '◯' + normal
    const keta = 120

    let mx = (Mouse.instance.easeNormal.x + 1) * 0.5
    // let my = (Mouse.instance.easeNormal.y + 1) * 0.5
    const x = ~~(keta * mx)
    const y = ~~((cols.length - 1) * mx)

    const col = cols[y]
    for(let i = 0; i < keta; i++) {
      if(i == x) {
        t += col + '●' + normal
      } else {
        t += '_'
      }
    }

    t += white + '◯' + reset
    console.log(t)
  }
}