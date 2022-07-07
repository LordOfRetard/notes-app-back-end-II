const InvariantError = require('../../exceptions/InvariantError');
const {NotePayloadSchema} = require('./schema');

const NotesValidator = {
  validateNotePayloads: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
