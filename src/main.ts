/**
 * Some predefined delays (in milliseconds).
 */

import { processMessage } from './command';

console.log(

  processMessage("!ga"),
  processMessage("!ga game"),
  processMessage("!ga time"),
  //processMessage("!ga join"),
  processMessage("!ga participant"),
  processMessage("!ga rollgame"),
  processMessage("!ga rollwinner"),
)
