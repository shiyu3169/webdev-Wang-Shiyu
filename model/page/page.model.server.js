var mongoose = require("mongoose");

var PageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

var WebsiteSchema = require('../website/website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);


PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  return PageModel.create(page)
    .then(function (page) {
    var newPage = page;
    return WebsiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        website.pages.push(newPage._id);
        return website.save();
      });
  });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId: websiteId});
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  var websiteId = null;
  return PageModel.findPageById(pageId)
    .then(function(page) {
      websiteId = page.websiteId;
      return  PageModel.remove({_id: page._id})
        .then(function() {
          return WebsiteModel.update(
            {_id: websiteId},
            {$pull: {pages: pageId}});
        });
    });
}

