const messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({
      id: id,
      text: text,
      time: time
    });
    id++;
  res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const index = messages.findIndex(message => message.id == updateID);
    messages[index] = {
      id: messages[index].id,
      text: text || message.text,
      time: messages[index].time
    };
  res.status(200).send(messages);
  },

  update: ( req, res ) => {
      const { text } = req.body;
      const updateID = req.params.id;
      const messageIndex = messages.findIndex( message => message.id == updateID );
      let message = messages[ messageIndex ];

      messages[ messageIndex ] = {
        id: message.id,
        text: text || message.text,
        time: message.time
      };

      res.status(200).send( messages );
    },


  delete: (req, res) => {
    const deleteID = req.params.id;
    const deleteIDIndex = messages.findIndex(message => message.id == deleteID );
    messages.splice(deleteIDIndex, 1);
    res.status(200).send(messages);
  }
};
