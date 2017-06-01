/**
 * TemplateController
 *
 * @description :: Server-side logic for managing templates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function(req,res){
        Template.find().exec(function (err, templates) {
      if (err) return res.negotiate(err);
      return res.json(templates);
    });
    },
};

