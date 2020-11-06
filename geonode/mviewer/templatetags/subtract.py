from django import template

register = template.Library()

@register.filter
def subtract(value, arg):
    return value - arg

class CounterNode(template.Node):
    def __init__(self, varname):
        self.varname = varname

    def render(self, context):
        if self.varname in context:
            context[self.varname] += 1
        else:
            context[self.varname] = 1
        return ''


@register.tag
def counter(parser, token):
    try:
        tag_name, args = token.contents.split(None, 1)
    except ValueError:
        raise template.TemplateSyntaxError(
            "'counter' node requires a variable name.")
    return CounterNode(args)

@register.filter(name='file_exists')
def file_exists(file):
    if int(file) < 12:
        filepath = '/static/mviewer/css/images/' + str(file) + '.svg'
        return filepath
    else:
        new_filepath = '/static/mviewer/css/images/HOME.svg'
        return new_filepath

@register.filter
def addstr(arg1, arg2):
    """concatenate arg1 & arg2"""
    return str(arg1) + str(arg2)