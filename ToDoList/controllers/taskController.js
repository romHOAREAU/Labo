// Display list of all Task
exports.task_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Tasks list');
};

// Display detail page for a specific Task
exports.task_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Detail Task id : ' + req.params.id);
};

// Handle Task create on POST
exports.task_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Task create POST');
};